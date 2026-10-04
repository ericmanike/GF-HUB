export async function handleDakazina(order: any, data: any, apiKey: string) {
  let networkId;

  if (data.network === "MTN") networkId = 3;
  else if (data.network === "TELECEL") networkId = 2;
  else if (data.network.startsWith("AT")) networkId = 4;
  else throw new Error("Invalid network");

  const res = await fetch(
    "https://reseller.dakazinabusinessconsult.com/api/v1/buy-data-package",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({
        recipient_msisdn: data.phoneNumber.trim(),
        network_id: networkId,
        shared_bundle: Number(data.bundleName),
        incoming_api_ref: data.reference,
      }),
    }
  );

  const result = await res.json();

  if (result.transaction_code) {
    order.transaction_id = result.transaction_code;
    order.status = "processing";
    await order.save();
  }
    console.log('Dakazina result:', result);
  return result;

}


export async function handleDataBundlesHub(order: any, data: any, apiKey: string) {
  const res = await fetch(
    "https://www.databundleshub.com/api/developer/purchase",
   
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({
      "phoneNumber": data.phoneNumber.trim(),
      "capacity":`${parseInt(data.bundleName)}`
      }),
    }
  );

  const result = await res.json();

  if (result.success && result.data) {
    order.transaction_id = "gf-" + result.data.purchaseId;
    order.status = "processing";
    await order.save();
  }
  //  console.log('Databundlehub result:', result);
  return result;

}







