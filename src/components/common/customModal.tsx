import React, { useState } from "react";
import styled from "styled-components";
import { Button, Window, WindowContent, WindowHeader } from "react95";
import { useRouter } from "next/router";
import { Grid } from "antd";
import Link from "next/link";

const { useBreakpoint } = Grid;

interface Props {
  children: React.ReactNode;
  modalName: string;
  backPath?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
}

const CustomModal = ({
  children,
  modalName,
  backPath,
  top,
  left,
  right,
  bottom,
  width,
  height,
}: Props) => {
  const route = useRouter();

  const screens = useBreakpoint();
  const [disabled, setDisabled] = useState(false);

  const closeModal = () => {
    setDisabled(true);
    route.back();
  };

  return (
    <ModalWrapper>
      <Window
        className="window"
        style={{
          position: "absolute",
          top: top ? top : "10%",
          left: left ? left : "25%",
          width: width ? width : "50vw",
          height: height ? height : "60vh",
        }}
      >
        <WindowHeader
          className="window-title"
          style={{
            justifyContent: "space-between",
            display: "flex",
            padding: "10px",
            height: screens.md ? "50px" : "35px",
          }}
        >
          <span
            style={{
              fontFamily: "dunggeunmo-bold",
              fontSize: "26px",
              maxWidth: "10em", // 최대 길이를 10글자로 설정
              textOverflow: "ellipsis", // 말줄임표로 넘치는 텍스트 처리
              whiteSpace: "nowrap", // 텍스트를 한 줄로 유지
              overflow: "hidden", // 넘치는 부분 감춤
            }}
          >
            {`${modalName}`}
          </span>
          {backPath ? (
            <Link href={backPath}>
              <Button
                style={{ marginTop: "2px" }}
                disabled={disabled}
                onClick={() => setDisabled(true)}
              >
                <span
                  style={{
                    fontFamily: "dunggeunmo-bold",
                    fontSize: screens.md ? "28px" : "24px",
                  }}
                >
                  X
                </span>
              </Button>
            </Link>
          ) : (
            <Button
              style={{ marginTop: "2px" }}
              onClick={closeModal}
              disabled={disabled}
            >
              <span
                style={{
                  fontFamily: "dunggeunmo-bold",
                  fontSize: screens.md ? "28px" : "24px",
                }}
              >
                X
              </span>
            </Button>
          )}
        </WindowHeader>
        <WindowContent>{children}</WindowContent>
      </Window>
    </ModalWrapper>
  );
};

export default CustomModal;

const ModalWrapper = styled.div`
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;

  .window-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      background: ${({ theme }) => theme.materialText};
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .window {
    width: 400px;
    min-height: 200px;
  }

  .window:nth-child(2) {
    margin: 2rem;
  }

  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`;
