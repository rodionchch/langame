import * as s from "./styles";

import iconDevice from "assets/icons/device.svg";
import iconSelectGame from "assets/icons/selectgame.svg";
import iconProblem from "assets/icons/problem.svg";
import iconSession from "assets/icons/session.svg";
import iconLogout from "assets/icons/logout.svg";

const Slider = () => {
  return (
    <s.Slider>
      <s.SliderItem color={"#f6fbff"} image={iconDevice}>
        <s.SliderItemLabel>Вернутся на рабочий стол</s.SliderItemLabel>
      </s.SliderItem>

      <s.SliderItem color={"#f8f0ff"} image={iconSelectGame}>
        <s.SliderItemLabel>Выбрать игру</s.SliderItemLabel>
      </s.SliderItem>

      <s.SliderItem color={"#fffeee"} image={iconProblem}>
        <s.SliderItemLabel>Сообщить о проблеме</s.SliderItemLabel>
      </s.SliderItem>

      <s.SliderItem color={"#f0fff9"} image={iconSession}>
        <s.SliderItemLabel>Продлить сессию</s.SliderItemLabel>
      </s.SliderItem>

      <s.SliderItem color={"#ffeded"} image={iconLogout}>
        <s.SliderItemLabel>Завершить сессию</s.SliderItemLabel>
      </s.SliderItem>
    </s.Slider>
  );
};

export default Slider;
