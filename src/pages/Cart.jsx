import React from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <>
      <div>
        <section className="cart">
          <section className="cart-header">
            <div className="cart-header__item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={31}
                height={31}
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M10.6667 28.7917C12.0014 28.7917 13.0833 27.7097 13.0833 26.375C13.0833 25.0403 12.0014 23.9583 10.6667 23.9583C9.33198 23.9583 8.25 25.0403 8.25 26.375C8.25 27.7097 9.33198 28.7917 10.6667 28.7917Z"
                  stroke="#3F3F3F"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.1667 28.7917C26.5014 28.7917 27.5833 27.7097 27.5833 26.375C27.5833 25.0403 26.5014 23.9583 25.1667 23.9583C23.832 23.9583 22.75 25.0403 22.75 26.375C22.75 27.7097 23.832 28.7917 25.1667 28.7917Z"
                  stroke="#3F3F3F"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.85117 8.24999H28.7916L26.7616 18.3879C26.6511 18.9442 26.3484 19.4439 25.9066 19.7996C25.4648 20.1553 24.912 20.3442 24.3449 20.3333H11.5728C10.9828 20.3383 10.4113 20.1273 9.96612 19.74C9.52095 19.3527 9.23286 18.8159 9.15617 18.2308L7.3195 4.31083C7.24334 3.72991 6.95872 3.19643 6.51862 2.80968C6.07852 2.42292 5.5129 2.20922 4.927 2.20833H2.20825"
                  stroke="#3F3F3F"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3>Cart</h3>
            </div>
            <div className="cart-header__item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M2.5 5H4.16667H17.5"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33337 9.16667V14.1667"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6666 9.16667V14.1667"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Link to="/empty-cart">Empty trash</Link>
            </div>
          </section>
        </section>
        <section className="pizza-cart">
          <div className="vl" />
          <div className="pizza-cart__item">
            <div className="pizza-img">
              <img
                src="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg"
                alt="pizza"
              />
              <div className="pizza-cart__text">
                <p className="text__header">Cheeseburger pizza</p>
                <p className="text__gray">thin dough, 26 cm.</p>
              </div>
            </div>
            <div className="pizza-amount">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle
                  cx={16}
                  cy={16}
                  r={15}
                  fill="white"
                  stroke="#FE5F1E"
                  strokeWidth={2}
                />
                <path
                  d="M15.0402 15.04H19.8402C20.3704 15.04 20.8002 15.4698 20.8002 16C20.8002 16.5302 20.3704 16.96 19.8402 16.96H15.0402H12.1602C11.63 16.96 11.2002 16.5302 11.2002 16C11.2002 15.4698 11.63 15.04 12.1602 15.04H15.0402Z"
                  fill="#FE5F1E"
                />
              </svg>
              <div className="amount">
                <p>2</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle
                  cx={16}
                  cy={16}
                  r={15}
                  fill="white"
                  stroke="#FE5F1E"
                  strokeWidth={2}
                />
                <path
                  d="M19.8402 15.04H16.9602V12.16C16.9602 11.6299 16.5304 11.2 16.0002 11.2C15.47 11.2 15.0402 11.6299 15.0402 12.16V15.04H12.1602C11.63 15.04 11.2002 15.4699 11.2002 16C11.2002 16.5302 11.63 16.96 12.1602 16.96H15.0402V19.84C15.0402 20.3702 15.47 20.8 16.0002 20.8C16.5304 20.8 16.9602 20.3702 16.9602 19.84V16.96H19.8402C20.3704 16.96 20.8002 16.5302 20.8002 16C20.8002 15.4699 20.3704 15.04 19.8402 15.04Z"
                  fill="#EB5A1E"
                />
              </svg>
            </div>
            <div className="pizza-prise">
              <p>19 $</p>
            </div>
            <div className="pizza-delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle
                  cx={16}
                  cy={16}
                  r={15}
                  fill="white"
                  stroke="#D7D7D7"
                  strokeWidth={2}
                />
                <path
                  d="M19.7479 17.9557L17.4993 15.7071L19.7479 13.4585C20.1618 13.0446 20.1618 12.3734 19.7479 11.9595C19.334 11.5455 18.6628 11.5455 18.2488 11.9595L16.0002 14.2081L13.7516 11.9595C13.3377 11.5455 12.6665 11.5455 12.2526 11.9595C11.8386 12.3734 11.8386 13.0446 12.2526 13.4585L14.5012 15.7071L12.2526 17.9557C11.8386 18.3696 11.8386 19.0409 12.2526 19.4548C12.6665 19.8687 13.3377 19.8687 13.7516 19.4548L16.0002 17.2062L18.2488 19.4548C18.6628 19.8687 19.334 19.8687 19.7479 19.4548C20.1618 19.0409 20.1618 18.3696 19.7479 17.9557Z"
                  fill="#D0D0D0"
                />
              </svg>
            </div>
          </div>
          <div className="vl" />
          <div className="pizza-cart__item">
            <div className="pizza-img">
              <img
                src="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg"
                alt="pizza"
              />
              <div className="pizza-cart__text">
                <p className="text__header">Asian shrimp</p>
                <p className="text__gray">thin dough, 22 cm.</p>
              </div>
            </div>
            <div className="pizza-amount">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle
                  cx={16}
                  cy={16}
                  r={15}
                  fill="white"
                  stroke="#FE5F1E"
                  strokeWidth={2}
                />
                <path
                  d="M15.0402 15.04H19.8402C20.3704 15.04 20.8002 15.4698 20.8002 16C20.8002 16.5302 20.3704 16.96 19.8402 16.96H15.0402H12.1602C11.63 16.96 11.2002 16.5302 11.2002 16C11.2002 15.4698 11.63 15.04 12.1602 15.04H15.0402Z"
                  fill="#FE5F1E"
                />
              </svg>
              <div className="amount">
                <p>1</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle
                  cx={16}
                  cy={16}
                  r={15}
                  fill="white"
                  stroke="#FE5F1E"
                  strokeWidth={2}
                />
                <path
                  d="M19.8402 15.04H16.9602V12.16C16.9602 11.6299 16.5304 11.2 16.0002 11.2C15.47 11.2 15.0402 11.6299 15.0402 12.16V15.04H12.1602C11.63 15.04 11.2002 15.4699 11.2002 16C11.2002 16.5302 11.63 16.96 12.1602 16.96H15.0402V19.84C15.0402 20.3702 15.47 20.8 16.0002 20.8C16.5304 20.8 16.9602 20.3702 16.9602 19.84V16.96H19.8402C20.3704 16.96 20.8002 16.5302 20.8002 16C20.8002 15.4699 20.3704 15.04 19.8402 15.04Z"
                  fill="#EB5A1E"
                />
              </svg>
            </div>
            <div className="pizza-prise">
              <p>22 $</p>
            </div>
            <div className="pizza-delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle
                  cx={16}
                  cy={16}
                  r={15}
                  fill="white"
                  stroke="#D7D7D7"
                  strokeWidth={2}
                />
                <path
                  d="M19.7479 17.9557L17.4993 15.7071L19.7479 13.4585C20.1618 13.0446 20.1618 12.3734 19.7479 11.9595C19.334 11.5455 18.6628 11.5455 18.2488 11.9595L16.0002 14.2081L13.7516 11.9595C13.3377 11.5455 12.6665 11.5455 12.2526 11.9595C11.8386 12.3734 11.8386 13.0446 12.2526 13.4585L14.5012 15.7071L12.2526 17.9557C11.8386 18.3696 11.8386 19.0409 12.2526 19.4548C12.6665 19.8687 13.3377 19.8687 13.7516 19.4548L16.0002 17.2062L18.2488 19.4548C18.6628 19.8687 19.334 19.8687 19.7479 19.4548C20.1618 19.0409 20.1618 18.3696 19.7479 17.9557Z"
                  fill="#D0D0D0"
                />
              </svg>
            </div>
          </div>
          <div className="vl" />
          <div className="pizza-cart__item">
            <div className="pizza-img">
              <img
                src="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg"
                alt="pizza"
              />
              <div className="pizza-cart__text">
                <p className="text__header">Cheese chicken</p>
                <p className="text__gray">thin dough, 30 cm.</p>
              </div>
            </div>
            <div className="pizza-amount">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle
                  cx={16}
                  cy={16}
                  r={15}
                  fill="white"
                  stroke="#FE5F1E"
                  strokeWidth={2}
                />
                <path
                  d="M15.0402 15.04H19.8402C20.3704 15.04 20.8002 15.4698 20.8002 16C20.8002 16.5302 20.3704 16.96 19.8402 16.96H15.0402H12.1602C11.63 16.96 11.2002 16.5302 11.2002 16C11.2002 15.4698 11.63 15.04 12.1602 15.04H15.0402Z"
                  fill="#FE5F1E"
                />
              </svg>
              <div className="amount">
                <p>3</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle
                  cx={16}
                  cy={16}
                  r={15}
                  fill="white"
                  stroke="#FE5F1E"
                  strokeWidth={2}
                />
                <path
                  d="M19.8402 15.04H16.9602V12.16C16.9602 11.6299 16.5304 11.2 16.0002 11.2C15.47 11.2 15.0402 11.6299 15.0402 12.16V15.04H12.1602C11.63 15.04 11.2002 15.4699 11.2002 16C11.2002 16.5302 11.63 16.96 12.1602 16.96H15.0402V19.84C15.0402 20.3702 15.47 20.8 16.0002 20.8C16.5304 20.8 16.9602 20.3702 16.9602 19.84V16.96H19.8402C20.3704 16.96 20.8002 16.5302 20.8002 16C20.8002 15.4699 20.3704 15.04 19.8402 15.04Z"
                  fill="#EB5A1E"
                />
              </svg>
            </div>
            <div className="pizza-prise">
              <p>24 $</p>
            </div>
            <div className="pizza-delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle
                  cx={16}
                  cy={16}
                  r={15}
                  fill="white"
                  stroke="#D7D7D7"
                  strokeWidth={2}
                />
                <path
                  d="M19.7479 17.9557L17.4993 15.7071L19.7479 13.4585C20.1618 13.0446 20.1618 12.3734 19.7479 11.9595C19.334 11.5455 18.6628 11.5455 18.2488 11.9595L16.0002 14.2081L13.7516 11.9595C13.3377 11.5455 12.6665 11.5455 12.2526 11.9595C11.8386 12.3734 11.8386 13.0446 12.2526 13.4585L14.5012 15.7071L12.2526 17.9557C11.8386 18.3696 11.8386 19.0409 12.2526 19.4548C12.6665 19.8687 13.3377 19.8687 13.7516 19.4548L16.0002 17.2062L18.2488 19.4548C18.6628 19.8687 19.334 19.8687 19.7479 19.4548C20.1618 19.0409 20.1618 18.3696 19.7479 17.9557Z"
                  fill="#D0D0D0"
                />
              </svg>
            </div>
          </div>
        </section>
        <section className="conclusion">
          <div className="amount">
            <p>
              Total pizzas: <span>3 pcs.</span>
            </p>
          </div>
          <div className="order">
            <p>
              Order amount: <span>65 $</span>
            </p>
          </div>
        </section>
        <section className="buttons">
          <div className="btn-gray">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
            >
              <path
                d="M7 13L1 6.93015L6.86175 1"
                stroke="#D3D3D3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Link to="/">Come back</Link>
          </div>
          <div className="btn-pay">
            <span>Pay now</span>
          </div>
        </section>
      </div>
    </>
  );
}
