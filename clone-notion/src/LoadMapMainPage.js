import React from 'react';
import Divider from '@material-ui/core/Divider';
import './LoadMapMainPage.css';
import CreateLoadMapDialog from './dialog/CreateLoadMapDialog';

const LoadMapMainPage = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="root">
      <HelpZone />
      <div className="notion-board-view">
        <Divider />
        <div class="notion-container">
          <div class="content-container">
            <div className="before">
              <div className="before-title"> 시작 전</div>
              <ProcessZone setOpen={setOpen} />
            </div>
            <div className="doing">
              {' '}
              <div className="doing-title">진행 중</div>
            </div>
            <div className="complete">
              {' '}
              <div className="complete-title">완료</div>
            </div>
            <div className="hiden">숨긴 열</div>
            <div> +그룹 추가</div>
          </div>
        </div>
      </div>
      {open && <CreateLoadMapDialog setOpen={setOpen} />}
    </div>
  );
};

const ProcessZone = ({ setOpen }) => {
  return (
    <div className="box-container">
      <div>
        <div
          onClick={e => {
            setOpen(true);
          }}
        >
          제목 없음{' '}
        </div>
      </div>
    </div>
  );
};

const HelpZone = () => {
  return (
    <div>
      <div className="title-container">
        <img
          className="loadmapIcon"
          src={'https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f698.svg'}
        />
        <div className="title">로드맵</div>
      </div>
      <div className="description-loadmap">
        <div>로드맵 템플릿을 사용하면 모든 프로젝트의 작업을 기록할 수 있습니다.</div>
        <div className="description-margin ">
          ⛰ 에픽은 하위 프로젝트와 업무를 포괄하는 상위 이니셔티브입니다.{' '}
        </div>
        <div>🏃‍♂️ 스프린트는 일련의 작업을 완료할 수 있도록 하는 푸시입니다. </div>
        <div>🔨 작업은 에픽을 구성하는 작업입니다. </div>
        <div>🐞 버그는 버그를 수정하는 작업입니다.</div>

        <div className="description-margin ">
          ↓ 에픽, 스프린트, 작업, 버그로 작업을 구분하려면 상태별을 클릭하세요. 상태, 엔지니어, 제품
          관리자별로 작업을 정렬할 수도 있습니다. 작업의 완료 예정일을 보려면 캘린더 보기로
          전환하세요.
        </div>
      </div>
    </div>
  );
};
export default LoadMapMainPage;
