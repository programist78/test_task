import { FC } from 'react';

interface StartIconProps {
  color?: string;
}

export const StartIcon: FC<StartIconProps> = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.788 3.10261C11.283 2.09861 12.714 2.09861 13.209 3.10261L15.567 7.87961L20.84 8.64561C21.947 8.80661 22.389 10.1676 21.588 10.9486L17.772 14.6686L18.673 19.9186C18.863 21.0216 17.705 21.8626 16.714 21.3426L11.998 18.8626L7.28303 21.3426C6.29303 21.8626 5.13503 21.0226 5.32303 19.9186L6.22403 14.6686L2.40903 10.9486C1.60803 10.1686 2.05003 8.80661 3.15703 8.64561L8.43003 7.87961L10.788 3.10261Z"
        fill={`${color ? color : 'currentColor'}`}
      />
    </svg>
  );
};

export const EmptyStarIcon = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2878 2.75254C11.783 1.74916 13.2138 1.74915 13.709 2.75254L16.067 7.53026L21.3395 8.2964C22.4468 8.4573 22.8889 9.81806 22.0877 10.5991L18.2724 14.318L19.1731 19.5692C19.3622 20.6721 18.2047 21.5131 17.2143 20.9924L12.4984 18.5131L7.78252 20.9924C6.79213 21.5131 5.63459 20.6721 5.82374 19.5693L6.7244 14.318L2.90916 10.5991C2.10791 9.81807 2.55005 8.4573 3.65735 8.2964L8.92988 7.53026L11.2878 2.75254ZM12.4984 3.68893L10.2401 8.26482C10.0434 8.66327 9.66332 8.93944 9.22361 9.00333L4.17382 9.73711L7.82788 13.2989C8.14606 13.6091 8.29125 14.0559 8.21614 14.4939L7.35353 19.5233L11.8702 17.1487C12.2635 16.9419 12.7333 16.9419 13.1266 17.1487L17.6433 19.5233L16.7807 14.4939C16.7056 14.0559 16.8508 13.6091 17.1689 13.2989L20.823 9.73711L15.7732 9.00333C15.3335 8.93944 14.9534 8.66327 14.7568 8.26482L12.4984 3.68893Z"
        fill="currentColor"
      />
    </svg>
  );
};