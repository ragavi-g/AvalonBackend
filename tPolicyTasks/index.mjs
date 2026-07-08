import http from "node:http";
const samplePolicyTasks = [
  {
    PolicyTaskID: "27162",
    AccountID: "6552",
    RatingPeriodID: 7,
    TaskID: 10,
    TaskOrd: 1,
    TaskDate: "2026-05-20T00:00:00.000Z",
    TaskText: "Create New Account",
    TaskNotes: "",
    ModDate: "2026-05-20T00:00:00.000Z",
    ModBy: "Ranjitha Chakali",
    CreateDate: "2026-05-20T22:31:31.563Z",
    TaggedAccountID: null,
  },
  {
    PolicyTaskID: "27174",
    AccountID: "6552",
    RatingPeriodID: 7,
    TaskID: 81,
    TaskOrd: 2,
    TaskDate: "2026-05-22T00:00:00.000Z",
    TaskText: "Create Indicate / GL",
    TaskNotes: "",
    ModDate: "2026-05-22T00:00:00.000Z",
    ModBy: "Ranjitha Chakali",
    CreateDate: "2026-05-22T04:40:50.753Z",
    TaggedAccountID: null,
  },
  {
    PolicyTaskID: "27175",
    AccountID: "6552",
    RatingPeriodID: 7,
    TaskID: 82,
    TaskOrd: 3,
    TaskDate: "2026-05-22T00:00:00.000Z",
    TaskText: "Create Indicate / Property",
    TaskNotes: "",
    ModDate: "2026-05-22T00:00:00.000Z",
    ModBy: "Ranjitha Chakali",
    CreateDate: "2026-05-22T04:41:33.257Z",
    TaggedAccountID: null,
  },
  {
    PolicyTaskID: "27176",
    AccountID: "6552",
    RatingPeriodID: 7,
    TaskID: 83,
    TaskOrd: 4,
    TaskDate: "2026-05-22T00:00:00.000Z",
    TaskText: "Create Indicate / Combined",
    TaskNotes: "",
    ModDate: "2026-05-22T00:00:00.000Z",
    ModBy: "Ranjitha Chakali",
    CreateDate: "2026-05-22T04:42:08.440Z",
    TaggedAccountID: null,
  },
  {
    "PolicyTaskID": "27166",
    "AccountID": "6553",
    "RatingPeriodID": 7,
    "TaskID": 10,
    "TaskOrd": 1,
    "TaskDate": "2026-05-20T00:00:00.000Z",
    "TaskText": "Create New Account",
    "TaskNotes": "",
    "ModDate": "2026-05-20T00:00:00.000Z",
    "ModBy": "Ranjitha Chakali",
    "CreateDate": "2026-05-20T23:49:08.590Z",
    "TaggedAccountID": null
  },
  {
    "PolicyTaskID": "27183",
    "AccountID": "6555",
    "RatingPeriodID": 7,
    "TaskID": 10,
    "TaskOrd": 1,
    "TaskDate": "2026-05-24T00:00:00.000Z",
    "TaskText": "Create New Account",
    "TaskNotes": "",
    "ModDate": "2026-05-24T00:00:00.000Z",
    "ModBy": "Ranjitha Chakali",
    "CreateDate": "2026-05-24T23:49:03.433Z",
    "TaggedAccountID": null
  },
  {
    "PolicyTaskID": "27190",
    "AccountID": "6558",
    "RatingPeriodID": 7,
    "TaskID": 10,
    "TaskOrd": 1,
    "TaskDate": "2026-05-25T00:00:00.000Z",
    "TaskText": "Create New Account",
    "TaskNotes": "",
    "ModDate": "2026-05-25T00:00:00.000Z",
    "ModBy": "Manoj Mallewade",
    "CreateDate": "2026-05-25T20:44:39.477Z",
    "TaggedAccountID": null
  },
  {
    "PolicyTaskID": "27212",
    "AccountID": "6558",
    "RatingPeriodID": 7,
    "TaskID": 83,
    "TaskOrd": 2,
    "TaskDate": "2026-05-26T00:00:00.000Z",
    "TaskText": "Create Indicate / Combined",
    "TaskNotes": "",
    "ModDate": "2026-05-26T00:00:00.000Z",
    "ModBy": "Subalaxmi v",
    "CreateDate": "2026-05-26T03:23:26.257Z",
    "TaggedAccountID": null
  },
  {
    "PolicyTaskID": "27191",
    "AccountID": "6559",
    "RatingPeriodID": 7,
    "TaskID": 10,
    "TaskOrd": 1,
    "TaskDate": "2026-05-25T00:00:00.000Z",
    "TaskText": "Create New Account",
    "TaskNotes": "",
    "ModDate": "2026-05-25T00:00:00.000Z",
    "ModBy": "Ranjitha Chakali",
    "CreateDate": "2026-05-25T21:44:17.447Z",
    "TaggedAccountID": null
  },
  {
    "PolicyTaskID": "27228",
    "AccountID": "6564",
    "RatingPeriodID": 7,
    "TaskID": 10,
    "TaskOrd": 1,
    "TaskDate": "2026-05-26T00:00:00.000Z",
    "TaskText": "Create New Account",
    "TaskNotes": "",
    "ModDate": "2026-05-26T00:00:00.000Z",
    "ModBy": "Subalaxmi v",
    "CreateDate": "2026-05-26T04:35:21.883Z",
    "TaggedAccountID": null
  },
  {
    "PolicyTaskID": "27234",
    "AccountID": "6564",
    "RatingPeriodID": 7,
    "TaskID": 83,
    "TaskOrd": 2,
    "TaskDate": "2026-05-27T00:00:00.000Z",
    "TaskText": "Create Indicate / Combined",
    "TaskNotes": "",
    "ModDate": "2026-05-27T00:00:00.000Z",
    "ModBy": "Ranjitha Chakali",
    "CreateDate": "2026-05-27T03:04:14.777Z",
    "TaggedAccountID": null
  },
  {
    "PolicyTaskID": "27236",
    "AccountID": "6564",
    "RatingPeriodID": 7,
    "TaskID": 83,
    "TaskOrd": 3,
    "TaskDate": "2026-05-27T00:00:00.000Z",
    "TaskText": "Create Indicate / Combined",
    "TaskNotes": "",
    "ModDate": "2026-05-27T00:00:00.000Z",
    "ModBy": "Power Platform Service Account",
    "CreateDate": "2026-05-27T03:44:49.170Z",
    "TaggedAccountID": null
  },
  {
    "PolicyTaskID": "27253",
    "AccountID": "6569",
    "RatingPeriodID": 7,
    "TaskID": 10,
    "TaskOrd": 1,
    "TaskDate": "2026-05-27T00:00:00.000Z",
    "TaskText": "Create New Account",
    "TaskNotes": "",
    "ModDate": "2026-05-27T00:00:00.000Z",
    "ModBy": "Ranjitha Chakali",
    "CreateDate": "2026-05-27T10:15:44.733Z",
    "TaggedAccountID": null
  },
  {
    "PolicyTaskID": "27296",
    "AccountID": "6576",
    "RatingPeriodID": 7,
    "TaskID": 10,
    "TaskOrd": 1,
    "TaskDate": "2026-06-01T00:00:00.000Z",
    "TaskText": "Create New Account",
    "TaskNotes": "",
    "ModDate": "2026-06-01T00:00:00.000Z",
    "ModBy": "Subalaxmi v",
    "CreateDate": "2026-06-01T00:42:03.813Z",
    "TaggedAccountID": null
  },
  {
    PolicyTaskID: "27297",
    AccountID: "6577",
    RatingPeriodID: 7,
    TaskID: 10,
    TaskOrd: 1,
    TaskDate: "2026-06-01T00:00:00.000Z",
    TaskText: "Create New Account",
    TaskNotes: "",
    ModDate: "2026-06-01T00:00:00.000Z",
    ModBy: "Subalaxmi v",
    CreateDate: "2026-06-01T00:44:05.987Z",
    TaggedAccountID: null,
  },
  {
    "PolicyTaskID": "27346",
    "AccountID": "6585",
    "RatingPeriodID": 7,
    "TaskID": 10,
    "TaskOrd": 1,
    "TaskDate": "2026-06-02T00:00:00.000Z",
    "TaskText": "Create New Account",
    "TaskNotes": "",
    "ModDate": "2026-06-02T00:00:00.000Z",
    "ModBy": "Ranjitha Chakali",
    "CreateDate": "2026-06-02T22:32:20.773Z",
    "TaggedAccountID": null
  },
  {
    "PolicyTaskID": "27366",
    "AccountID": "6589",
    "RatingPeriodID": 7,
    "TaskID": 10,
    "TaskOrd": 1,
    "TaskDate": "2026-06-03T00:00:00.000Z",
    "TaskText": "Create New Account",
    "TaskNotes": "",
    "ModDate": "2026-06-03T00:00:00.000Z",
    "ModBy": "Ranjitha Chakali",
    "CreateDate": "2026-06-03T08:44:03.400Z",
    "TaggedAccountID": null
  },
  {
    "PolicyTaskID": "27479",
    "AccountID": "6589",
    "RatingPeriodID": 7,
    "TaskID": 24,
    "TaskOrd": 2,
    "TaskDate": "2026-06-08T00:00:00.000Z",
    "TaskText": "Submission Approved",
    "TaskNotes": "",
    "ModDate": "2026-06-08T00:00:00.000Z",
    "ModBy": "Ranjitha Chakali",
    "CreateDate": "2026-06-08T21:32:09.350Z",
    "TaggedAccountID": null
  },
  {
    "PolicyTaskID": "27480",
    "AccountID": "6589",
    "RatingPeriodID": 7,
    "TaskID": 33,
    "TaskOrd": 3,
    "TaskDate": "2026-06-08T00:00:00.000Z",
    "TaskText": "Bind Policy",
    "TaskNotes": "",
    "ModDate": "2026-06-08T00:00:00.000Z",
    "ModBy": "Ranjitha Chakali",
    "CreateDate": "2026-06-08T21:42:33.153Z",
    "TaggedAccountID": null
  },
  {
    "PolicyTaskID": "27367",
    "AccountID": "6590",
    "RatingPeriodID": 7,
    "TaskID": 10,
    "TaskOrd": 1,
    "TaskDate": "2026-06-03T00:00:00.000Z",
    "TaskText": "Create New Account",
    "TaskNotes": "",
    "ModDate": "2026-06-03T00:00:00.000Z",
    "ModBy": "Ranjitha Chakali",
    "CreateDate": "2026-06-03T10:53:16.380Z",
    "TaggedAccountID": null
  },
  {
    "PolicyTaskID": "27368",
    "AccountID": "6591",
    "RatingPeriodID": 7,
    "TaskID": 10,
    "TaskOrd": 1,
    "TaskDate": "2026-06-03T00:00:00.000Z",
    "TaskText": "Create New Account",
    "TaskNotes": "",
    "ModDate": "2026-06-03T00:00:00.000Z",
    "ModBy": "Ranjitha Chakali",
    "CreateDate": "2026-06-03T22:04:05.973Z",
    "TaggedAccountID": null
  },
  {
    "PolicyTaskID": "27369",
    "AccountID": "6592",
    "RatingPeriodID": 7,
    "TaskID": 10,
    "TaskOrd": 1,
    "TaskDate": "2026-06-03T00:00:00.000Z",
    "TaskText": "Create New Account",
    "TaskNotes": "",
    "ModDate": "2026-06-03T00:00:00.000Z",
    "ModBy": "Ranjitha Chakali",
    "CreateDate": "2026-06-03T23:04:02.453Z",
    "TaggedAccountID": null
  },
  {
    "PolicyTaskID": "27435",
    "AccountID": "6593",
    "RatingPeriodID": 7,
    "TaskID": 10,
    "TaskOrd": 1,
    "TaskDate": "2026-06-04T00:00:00.000Z",
    "TaskText": "Create New Account",
    "TaskNotes": "",
    "ModDate": "2026-06-04T00:00:00.000Z",
    "ModBy": "Subalaxmi v",
    "CreateDate": "2026-06-04T03:50:56.270Z",
    "TaggedAccountID": null
},
{
  "PolicyTaskID": "27437",
  "AccountID": "6595",
  "RatingPeriodID": 7,
  "TaskID": 10,
  "TaskOrd": 1,
  "TaskDate": "2026-06-04T00:00:00.000Z",
  "TaskText": "Create New Account",
  "TaskNotes": "",
  "ModDate": "2026-06-04T00:00:00.000Z",
  "ModBy": "Subalaxmi v",
  "CreateDate": "2026-06-04T04:41:05.593Z",
  "TaggedAccountID": null
},
{
  "PolicyTaskID": "27438",
  "AccountID": "6596",
  "RatingPeriodID": 7,
  "TaskID": 10,
  "TaskOrd": 1,
  "TaskDate": "2026-06-04T00:00:00.000Z",
  "TaskText": "Create New Account",
  "TaskNotes": "",
  "ModDate": "2026-06-04T00:00:00.000Z",
  "ModBy": "Subalaxmi v",
  "CreateDate": "2026-06-04T04:42:48.277Z",
  "TaggedAccountID": null
},
{
  "PolicyTaskID": "27439",
  "AccountID": "6597",
  "RatingPeriodID": 7,
  "TaskID": 10,
  "TaskOrd": 1,
  "TaskDate": "2026-06-04T00:00:00.000Z",
  "TaskText": "Create New Account",
  "TaskNotes": "",
  "ModDate": "2026-06-04T00:00:00.000Z",
  "ModBy": "Subalaxmi v",
  "CreateDate": "2026-06-04T04:44:30.453Z",
  "TaggedAccountID": null
},
{
  "PolicyTaskID": "27440",
  "AccountID": "6598",
  "RatingPeriodID": 7,
  "TaskID": 10,
  "TaskOrd": 1,
  "TaskDate": "2026-06-04T00:00:00.000Z",
  "TaskText": "Create New Account",
  "TaskNotes": "",
  "ModDate": "2026-06-04T00:00:00.000Z",
  "ModBy": "Subalaxmi v",
  "CreateDate": "2026-06-04T04:45:47.430Z",
  "TaggedAccountID": null
},
{
  "PolicyTaskID": "27470",
  "AccountID": "6602",
  "RatingPeriodID": 7,
  "TaskID": 10,
  "TaskOrd": 1,
  "TaskDate": "2026-06-07T00:00:00.000Z",
  "TaskText": "Create New Account",
  "TaskNotes": "",
  "ModDate": "2026-06-07T00:00:00.000Z",
  "ModBy": "Ranjitha Chakali",
  "CreateDate": "2026-06-07T23:03:02.257Z",
  "TaggedAccountID": null
},
{
  "PolicyTaskID": "27475",
  "AccountID": "6604",
  "RatingPeriodID": 7,
  "TaskID": 10,
  "TaskOrd": 1,
  "TaskDate": "2026-06-08T00:00:00.000Z",
  "TaskText": "Create New Account",
  "TaskNotes": "",
  "ModDate": "2026-06-08T00:00:00.000Z",
  "ModBy": "Ranjitha Chakali",
  "CreateDate": "2026-06-08T02:31:24.563Z",
  "TaggedAccountID": null
}
];
const PORT = process.env.PORT || 3001;

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS,GET,POST",
};

const serverUnixTime = () => Math.floor(Date.now() / 1000);

const buildJsonResponse = (
  statusCode,
  { isSuccess, responseMsg, data = {} },
) => ({
  statusCode,
  body: JSON.stringify({
    isSuccess,
    responseMsg,
    data,
    serverDateTime: serverUnixTime(),
  }),
  headers,
});

const handlePolicyTasks = async (accountId) => {
  const data = samplePolicyTasks.filter((item) => {
    if (!accountId) {
      return true;
    }

    return item.AccountID === String(accountId);
  });

  return buildJsonResponse(200, {
    isSuccess: true,
    responseMsg: "Policy Tasks loaded successfully",
    data,
  });
};

export const handler = async (event) => {
  const method = (event.httpMethod || "").toUpperCase();
  const accountId = event.query?.accountId;
  const path = event.path || "";

  if (method === "OPTIONS") {
    return {
      statusCode: 204,
      body: "",
      headers,
    };
  }

  try {
    if (path === "/policy_tasks" && method === "GET") {
      return await handlePolicyTasks(accountId);
    }

    return buildJsonResponse(404, {
      isSuccess: false,
      responseMsg: "Route not found",
      data: {},
    });
  } catch (error) {
    console.error(error);

    return buildJsonResponse(500, {
      isSuccess: false,
      responseMsg: error.message,
      data: {},
    });
  }
};

const server = http.createServer(async (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", async () => {

    const url = new URL(req.url, `http://${req.headers.host}`);

    const event = {
      httpMethod: req.method,
      path: url.pathname,
      query: Object.fromEntries(url.searchParams),
      body,
    };

    const response = await handler(event);

    res.writeHead(response.statusCode, response.headers);
    res.end(response.body);
  });
});

const start = async () => {
  try {
    server.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);

      console.log(`Test URL: http://localhost:${PORT}/policy_tasks`);
    });
  } catch (error) {
    console.error("Failed to start application:", error.message);
    process.exit(1);
  }
};

const shutdown = async () => {
  try {
    console.log("Application shutdown completed");
  } catch (err) {
    console.error(err);
  }
};

process.on("SIGINT", async () => {
  await shutdown();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await shutdown();
  process.exit(0);
});

process.on("exit", shutdown);

start();
