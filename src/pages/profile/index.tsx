import CustomModal from "@/components/common/customModal";
import Div from "@/components/post/Div";
import H2 from "@/components/post/H2";
import TabTag from "@/components/post/TabTag";
import { Grid } from "antd";
import Image from "next/image";
import React from "react";

const { useBreakpoint } = Grid;

export default function Profile() {
  const screens = useBreakpoint();

  return (
    <CustomModal
      modalName="프로필"
      width={screens.sm ? "80vw" : "95vw"}
      height="70vh"
      left={screens.sm ? "10%" : "2.5%"}
    >
      <div style={{ width: "100%", height: "55vh", overflowY: "scroll" }}>
        <Div />
        <H2>
          <Image
            src={
              "https://user-images.githubusercontent.com/86397600/237113449-6b8571b7-84eb-4463-88d0-10142af45e7a.jpeg"
            }
            alt="profileImage"
            width={200}
            height={200}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <div
              style={{
                paddingRight: "30px",
              }}
            >
              <div>{`Title.`}</div>
              <TabTag>
                {`"건강할 건", "배울 학"이란 이름을 가진 개발자 “이건학”입니다.
건강하게 배워서 대체불가한 부품으로 자리매김하여, "이.건.학"이라는 이름이 곧 브랜드가 되는 것이 제 목표입니다.`}
              </TabTag>
            </div>
          </div>
        </H2>
        <Div />
        <H2>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <div style={{ paddingRight: "30px" }}>
              <div>{`Profile.`}</div>
              <TabTag>{`* 이건학`}</TabTag>
              <TabTag>{`* 1992`}</TabTag>
              <TabTag>{`* 서울시 송파구`}</TabTag>
              <TabTag>{`* Frontend, Cross Platform`}</TabTag>
            </div>
            <div style={{ paddingRight: "30px" }}>
              <div>{`Contact.`}</div>
              <TabTag>{`* leegh4250@gmail.com`}</TabTag>
            </div>
          </div>
        </H2>
        <H2>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <div style={{ paddingRight: "30px" }}>
              <div>{`Education.`}</div>
              <TabTag>
                {`* 한국방송통신대학교 컴퓨터과학과`}
                <TabTag>{`2022.2 ~ (2023휴학)`}</TabTag>
              </TabTag>
              <TabTag>
                {`* 42Seoul(42Student)`}
                <TabTag>{`2021.11 ~ ing`}</TabTag>
              </TabTag>
            </div>
          </div>
        </H2>
        <Div />
      </div>
    </CustomModal>
  );
}
