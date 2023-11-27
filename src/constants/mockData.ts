import { EnumPayment, EnumPaymentStatus, EnumRoles } from 'types/enums';
import { IPurchaseProduct } from 'types/shopTypes';
import { IUser } from 'types/userTypes';

const purchaseProducts: IPurchaseProduct[] = [
  {
    bankCard: '1155 **** **** 2001',
    acceptedAt: '25/05/20, 15:20',
    boughtBy: {
      email: 'exampleBuyer1@gmail.com',
      avatarURL: 'user1-avatar.jpg',
      userName: 'User1',
    },
    id: '1',
    payment: {
      method: EnumPayment.BankCard,
      paymentCode: 'ABC123',
    },
    price: 100,
    productId: {
      id: 'product1',
      shortDescription: {
        sh: 'Description sh',
        pt: 'Description pt',
        ru: 'Description ru',
        en: 'Description en',
        ar: 'Description ar',
        es: 'Description es',
      },
    },
    received: true,
    soldBy: {
      email: 'exampleSolder1@gmail.com',
      avatarURL: 'seller1-avatar.jpg',
      userName: 'Seller1',
    },
    status: EnumPaymentStatus.SUCCEEDED,
  },

  {
    bankCard: '0x7aC3c2E6b6d4f3f',
    acceptedAt: '27/05/20, 10:00',
    boughtBy: {
      email: 'exampleBuyer3@gmail.com',
      avatarURL: 'user3-avatar.jpg',
      userName: 'User3',
    },
    id: '3',
    payment: {
      method: EnumPayment.CryptoCurrency,
      paymentCode: 'DEF456',
    },
    price: 200,
    productId: {
      id: 'product3',
      shortDescription: {
        sh: 'Description sh 3',
        pt: 'Description pt 3',
        ru: 'Description ru 3',
        en: 'Description en 3',
        ar: 'Description ar 3',
        es: 'Description es 3',
      },
    },
    received: true,
    soldBy: {
      email: 'exampleSolder3@gmail.com',
      avatarURL: 'seller3-avatar.jpg',
      userName: 'Seller3',
    },
    status: EnumPaymentStatus.SUCCEEDED,
  },
  {
    bankCard: '0x7aC3c2E6b6d4f3f',
    acceptedAt: '28/05/20, 12:00',
    boughtBy: {
      email: 'exampleBuyer4@gmail.com',
      avatarURL: 'user4-avatar.jpg',
      userName: 'User4',
    },
    id: '4',
    payment: {
      method: EnumPayment.CryptoCurrency,
      paymentCode: 'GHI789',
    },
    price: 120,
    productId: {
      id: 'product4',
      shortDescription: {
        sh: 'Description sh 4',
        pt: 'Description pt 4',
        ru: 'Description ru 4',
        en: 'Description en 4',
        ar: 'Description ar 4',
        es: 'Description es 4',
      },
    },
    received: true,
    soldBy: {
      email: 'exampleSolder4@gmail.com',
      avatarURL: 'seller4-avatar.jpg',
      userName: 'Seller4',
    },
    status: EnumPaymentStatus.SUCCEEDED,
  },
  {
    bankCard: '1155 **** **** 2001',
    acceptedAt: '29/05/20, 14:00',
    boughtBy: {
      email: 'exampleBuyer5@gmail.com',
      avatarURL: 'user5-avatar.jpg',
      userName: 'User5',
    },
    id: '5',
    payment: {
      method: EnumPayment.BankCard,
      paymentCode: 'JKL012',
    },
    price: 180,
    productId: {
      id: 'product5',
      shortDescription: {
        sh: 'Description sh 5',
        pt: 'Description pt 5',
        ru: 'Description ru 5',
        en: 'Description en 5',
        ar: 'Description ar 5',
        es: 'Description es 5',
      },
    },
    received: true,
    soldBy: {
      email: 'exampleSolder5@gmail.com',
      avatarURL: 'seller5-avatar.jpg',
      userName: 'Seller5',
    },
    status: EnumPaymentStatus.FAILED,
  },
  {
    bankCard: '1155 **** **** 2001',
    acceptedAt: '30/05/20, 16:00',
    boughtBy: {
      email: 'exampleBuyer6@gmail.com',
      avatarURL: 'user6-avatar.jpg',
      userName: 'User6',
    },
    id: '6',
    payment: {
      method: EnumPayment.BankCard,
      paymentCode: 'MNO345',
    },
    price: 90,
    productId: {
      id: 'product6',
      shortDescription: {
        sh: 'Description sh 6',
        pt: 'Description pt 6',
        ru: 'Description ru 6',
        en: 'Description en 6',
        ar: 'Description ar 6',
        es: 'Description es 6',
      },
    },
    received: true,
    soldBy: {
      email: 'exampleSolder6@gmail.com',
      avatarURL: 'seller6-avatar.jpg',
      userName: 'Seller6',
    },
    status: EnumPaymentStatus.FAILED,
  },
  {
    bankCard: '1155 **** **** 2001',
    acceptedAt: '31/05/20, 18:00',
    boughtBy: {
      email: 'exampleBuyer7@gmail.com',
      avatarURL: 'user7-avatar.jpg',
      userName: 'User7',
    },
    id: '7',
    payment: {
      method: EnumPayment.BankCard,
      paymentCode: 'PQR678',
    },
    price: 110,
    productId: {
      id: 'product7',
      shortDescription: {
        sh: 'Description sh 7',
        pt: 'Description pt 7',
        ru: 'Description ru 7',
        en: 'Description en 7',
        ar: 'Description ar 7',
        es: 'Description es 7',
      },
    },
    received: true,
    soldBy: {
      email: 'exampleSolder7@gmail.com',
      avatarURL: 'seller7-avatar.jpg',
      userName: 'Seller7',
    },
    status: EnumPaymentStatus.PENDING,
  },
];

export default purchaseProducts;

export const user: IUser = {
  achievements: ['Top Performer', 'Excellent Communicator'],
  address: {
    street: '456 Elm St',
    city: 'Sometown',
    phoneNumber: '555-123-4567',
    zipCode: '54321',
  },
  avatarURL:
    'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png',
  backgroundColor: '#f0f0f0',
  backgroundImage: 'http://example.com/user123/background.jpg',
  banned: false,
  bonuses: 150,
  confidentLvl: 9,
  email: 'user123@example.com',
  emailConfirmDate: '2023-11-27',
  experience: 750,
  id: '0987654321',
  isTwoFactorEnabled: true,
  level: 12,
  qrCode: 'http://example.com/user123/qr-code.jpg',
  ratingsStats: {
    entries: [
      { key: 'Likes', value: '200' },
      { key: 'Dislikes', value: '10' },
    ],
  },
  role: EnumRoles.BUYER,
  stripeId: 'stripe_0987654321',
  subscribed: true,
  userName: 'user123',
};
