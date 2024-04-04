const carTransactionHistoryAdress =
  "0x8DD592A57B885E66b6bAB874751e2722285cb0AB";
const carmaintenanceAdress = "0xf6568AF39811345ab12301d6b929D7B3cC36c704";
const caraccidentAdress = "0xe0336F57A310C11d916e17b2868b18895766997e";
const carTransactionHistoryABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "NewUpdate",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_carId",
        type: "string",
      },
      {
        internalType: "string",
        name: "_dateTransaction",
        type: "string",
      },
      {
        internalType: "string",
        name: "_buyerId",
        type: "string",
      },
      {
        internalType: "string",
        name: "_sellerId",
        type: "string",
      },
      {
        internalType: "string",
        name: "_price",
        type: "string",
      },
      {
        internalType: "string",
        name: "_signatureBuyer",
        type: "string",
      },
      {
        internalType: "string",
        name: "_signatureSeller",
        type: "string",
      },
    ],
    name: "addTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "carId",
        type: "string",
      },
    ],
    name: "getTransactionsByCarID",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "carId",
            type: "string",
          },
          {
            internalType: "string",
            name: "dateTransaction",
            type: "string",
          },
          {
            internalType: "string",
            name: "buyerId",
            type: "string",
          },
          {
            internalType: "string",
            name: "sellerId",
            type: "string",
          },
          {
            internalType: "string",
            name: "price",
            type: "string",
          },
          {
            internalType: "string",
            name: "signatureBuyer",
            type: "string",
          },
          {
            internalType: "string",
            name: "signatureSeller",
            type: "string",
          },
        ],
        internalType: "struct CarTransactionHistory.Transaction[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "transactionCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const carmaintenanceABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "NewUpdate",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_carId",
        type: "string",
      },
      {
        internalType: "uint16",
        name: "_totalKmRun",
        type: "uint16",
      },
      {
        internalType: "string",
        name: "_typeOfMaintain",
        type: "string",
      },
      {
        internalType: "string",
        name: "_placeMaintain",
        type: "string",
      },
      {
        internalType: "string",
        name: "_result",
        type: "string",
      },
    ],
    name: "addMaintenance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_carId",
        type: "string",
      },
    ],
    name: "getMaintenanceHistoryByCarId",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "carId",
            type: "string",
          },
          {
            internalType: "uint16",
            name: "totalKmRun",
            type: "uint16",
          },
          {
            internalType: "string",
            name: "typeOfMaintain",
            type: "string",
          },
          {
            internalType: "string",
            name: "placeMatintain",
            type: "string",
          },
          {
            internalType: "string",
            name: "result",
            type: "string",
          },
        ],
        internalType: "struct Carmaintenance.Maintenance[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const caraccidentABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "NewUpdate",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_carId",
        type: "string",
      },
      {
        internalType: "string",
        name: "_describeAccident",
        type: "string",
      },
      {
        internalType: "string",
        name: "_describeFix",
        type: "string",
      },
      {
        internalType: "string",
        name: "_result",
        type: "string",
      },
    ],
    name: "addAccidentFix",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_carId",
        type: "string",
      },
    ],
    name: "getAccidentFixHistoryByCarId",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "carId",
            type: "string",
          },
          {
            internalType: "string",
            name: "decribeAccident",
            type: "string",
          },
          {
            internalType: "string",
            name: "decribeFix",
            type: "string",
          },
          {
            internalType: "string",
            name: "result",
            type: "string",
          },
        ],
        internalType: "struct Caraccident.Accident[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export {
  carTransactionHistoryAdress,
  carmaintenanceAdress,
  caraccidentAdress,
  carTransactionHistoryABI,
  carmaintenanceABI,
  caraccidentABI,
};
