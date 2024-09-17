import React from "react";
import { useSelector } from "react-redux";
import PokemonsBoxContainer from "../../components/pokemons-box/PokemonsBoxContainer";
import SmTeamChangeBox from "./components/sm-team-change-box/SmTeamChangeBox";

const Box = () => {
const teamStore = useSelector(state => state.team.team);
const boxPkmns = useSelector(state => state.box.box);
  const pkmnModals = [
    {operation:'box-delete', label: 'Delete', modalMsg: [{id:5, message: 'would you delete it?', hasNextStep: false, condition: null}]},
    {operation:'box-to-team', label: 'Move to Team', modalMsg: [{id:1,message:'your team is full would you replace one of them with him?', hasNextStep: true , condition:()=> teamStore.length >=6}, {id:2, message:'move it?', hasNextStep: false, condition: null} ]}
  ] 
  
   
    return (
      
        <PokemonsBoxContainer  childPropsNeeded={true}  pkmns={boxPkmns} types={pkmnModals}  classes={'bg-dark text-light gap-4 vh-100 align-items-start mx-auto p-5'} reference="box" noPkmncustomMessage={'box is empty.'}>
          <SmTeamChangeBox />
        </PokemonsBoxContainer>
  )
}

export default Box




