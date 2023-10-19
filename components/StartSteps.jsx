import styles from "../styles";

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flew-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      <p className="text-[20px] font-bold text-white">{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#b0b0b0] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
