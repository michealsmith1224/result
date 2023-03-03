import Memory from "../../images/icon-memory.svg";
import Verbal from "../../images/icon-verbal.svg";
import Visal from "../../images/icon-visual.svg";
import Reaction from "../../images/icon-reaction.svg";
import "./buttonlist.css"
const btnArr = [
  {
    category: "Reaction",
    score: 80,
    icon: Reaction,
    textColor:"hsl(0, 100%, 67%)",
    backgroundColor:"hsl(0, 89%, 96%)",
  },
  {
    category: "Memory",
    score: 92,
    icon: Memory,
    textColor: "hsl(39, 100%, 56%)",
    backgroundColor: "hsl(39, 89%, 96%)",
  },
  {
    category: "Verbal",
    score: 61,
    icon: Verbal,
    textColor: "hsl(166, 100%, 37%)",
    backgroundColor: "hsl(166, 89%, 96%)",

  },
  {
    category: "Visual",
    score: 72,
    icon: Visal,
    backgroundColor: "hsl(234, 89%, 96%)",
    textColor: "hsl(234, 85%, 45%)"
  },
];

export const ButtonList = () => {
  return (
    <div className="btns">
      {btnArr.map((btn) => (
        <div className="bt py-2 rounded px-2" style={{backgroundColor: btn.backgroundColor}}>
          <div className="txt">
            <img src={btn.icon} alt="img" />
            <p className="text-capitalize  m-0" style={{color: btn.textColor}}>{btn.category}</p>
          </div>
          <div className="txt1 text-secondary"><span className="score-txt">{btn.score}</span>/100</div>
        </div>
      ))}
    </div>
  );
};
