import CardInsideCard from "./CardInsideCard";

export default function Card({ cardCohort, cardState }) {
  return (
    <div>
      {cardCohort}
      <CardInsideCard CardInsideState={cardState} />
    </div>
  );
}

// const prop = {
//   cardCohort: cohort,
//   cardState: setCohort,
// };
