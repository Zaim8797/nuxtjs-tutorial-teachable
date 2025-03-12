import {
  ConvertKitData,
  SubscribersResponse,
} from "../../types/types";
export default defineEventHandler(async (event) => {
  const { kitKey, kitSecret } = useRuntimeConfig();
  console.log("Kit Key:", kitKey); 
  console.log("Kit Secret:", kitSecret);
  console.log("subsription.ts");

  const body = await readBody(event);

  if (!body || !body.email) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email address is required",
    });
  }

  const subscriberRes: SubscribersResponse =
    await $fetch<SubscribersResponse>(
      `https://api.convertkit.com/v3/subscribers?api_secret=${kitSecret}&email_address=${body.email}`
    );

  if (subscriberRes.subscribers.length > 0) {
    return {
      title: "Already Subscribed",
      message: "You are already subscribed to the newsletter.",
    };
  }

  const res: ConvertKitData = await $fetch<ConvertKitData>(
    "https://api.convertkit.com/v3/forms/7787053/subscribe",
    {
      method: "POST",
      body: {
        api_key: kitKey,
        email: body.email,
      },
    }
  );

  return {
    title: "Subscription Successful",
    message:
      "Thank you for subscribing! Please check your email to confirm.",
  };
});