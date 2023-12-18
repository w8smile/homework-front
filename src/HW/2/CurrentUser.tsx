import {AddressType, UserType} from './HW2';

export type CurrentUserPropsType = {
    user: UserType
};

export const CurrentUser = (props: CurrentUserPropsType) => {
  return (
    <li key={props.user.id} id={`hw02-user-${props.user.id}`}>
      <strong>{props.user.name}</strong> (Age: {props.user.age})<strong> Address: </strong>
      {props.user.address.street}, {props.user.address.city}
    </li>
  );
};
