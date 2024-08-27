export const SampleChats = [
  {
    avatar: ["https:/www.w3schools.com/howto/img_avatar.png"],
    name: "Alice",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https:/www.w3schools.com/howto/img_avatar.png"],
    name: "john",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
  },
];

export const SampleUsers = [
  {
    avatar: ["https:/www.w3schools.com/howto/img_avatar.png"],
    name: "Alice",
    _id: "1",
  },
  {
    avatar: ["https:/www.w3schools.com/howto/img_avatar.png"],
    name: "john",
    _id: "2",
  },
];

export const SampleNotifications = [
  {
    sender: {
      avatar: ["https:/www.w3schools.com/howto/img_avatar.png"],
      name: "Alice",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https:/www.w3schools.com/howto/img_avatar.png"],
      name: "john",
    },
    _id: "2",
  },
];

export const SampleMessages = [
  {
    attachments: [
      {
        public_id: "sdbx",
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Furl&psig=AOvVaw2-hStEwIWK_PBgUQyjPV_B&ust=1724413115951000&source=images&cd=vfe&opi=89978449&ved=https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
      },
    ],
    content: "",
    _id: "dfbc35fdbsgdz",
    sender: {
      _id: "user_id",
      name: "Alice",
    },
    chat: "chatId",
    createdAt: "2024",
  },
  {
    attachments: [],
    content: "indfbxpom 34 spbn dffxb",
    _id: "df35fdbsgdz",
    sender: {
      _id: "ergdfc",
      name: "bob 5",
    },
    chat: "chatId",
    createdAt: "2024",
  },
];

export const dashboardData = {
  users: [
    {
      name: "Alice",
      _id: "1",
      avatar: "https:/www.w3schools.com/howto/img_avatar.png",
      username: "john_doe",
      friends: 20,
      groups: 5,
    },
    {
      name: "Bob",
      _id: "2",
      avatar: "https:/www.w3schools.com/howto/img_avatar.png",
      username: "bob_boi",
      friends: 20,
      groups: 25,
    },
  ],
  chats: [
    {
      name: "LabadBass Group",
      avatar: ["https:/www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https:/www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https:/www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "john_doe",
        avatar: "https:/www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "Lassan Group ",
      avatar: ["https:/www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https:/www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https:/www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Lallan",
        avatar: "https:/www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],
  messages: [
    {
      attachments: [],
      content: "Hello, everyone!",
      _id: "dfbc35fdbsgdz",
      sender: {
        avatar:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Furl&psig=AOvVaw2-hStEwIWK_PBgUQyjPV_B&ust=1724413115951000&source=images&cd=vfe&opi=89978449&ved=https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
        name: "Alice",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024",
    },
    {
      attachments: [
        {
          public_id: "jzxdbx",
          url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Furl&psig=AOvVaw2-hStEwIWK_PBgUQyjPV_B&ust=1724413115951000&source=images&cd=vfe&opi=89978449&ved=https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
        },
      ],
      content: "Hi, Bob! How are you?",
      _id: "tyj35fdbsgdz",
      sender: {
        avatar:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Furl&psig=AOvVaw2-hStEwIWK_PBgUQyjPV_B&ust=1724413115951000&source=images&cd=vfe&opi=89978449&ved=https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
        name: "bob 5",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024",
    },
  ],
};
