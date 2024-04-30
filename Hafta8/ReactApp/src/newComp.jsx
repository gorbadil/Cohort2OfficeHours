export default function NewComp(props) {
  const { yazi, soyad } = props;

  return (
    <div>
      {yazi} {soyad}
    </div>
  );
}

// const useState = (ilkDeger) => {
//   let _state = ilkDeger;

//   const setState = (newState) => {
//     _state = newState;
//   };

//   return [_state, setState];
// };
