import ChangePoint from "./point/ChangePoint";
import ChangeHeart from "./heart/ChangeHeart";

import "./ChangeSetting.scss";

const ChangeSetting = () => {
  return (
    <div className="admin-change-setting">
      <ChangeHeart />
      <ChangePoint />
    </div>
  );
};

export default ChangeSetting;
