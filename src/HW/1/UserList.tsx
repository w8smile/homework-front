type AddressType = {
    street: string; // ПОДПРАВЛЯЕМ any
    city: string; // ПОДПРАВЛЯЕМ any
};


type UserType = {
    id: number
    name: string
    age: number
    address: AddressType
    // ПРИДЕТСЯ САМОМУ)
};

type UserListPropsType = {
    users: UserType []// ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {
    return (
        <div id={'hw01-users'}>
            <h2>User List:</h2>

            <ul>
                {props.users.map((objectFromUsersArray) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
                    <li key={objectFromUsersArray.id} id={`hw01-user-${objectFromUsersArray.id}`}>
                        <strong>{objectFromUsersArray.name}</strong> (Age: {objectFromUsersArray.age})<strong> Address:</strong>
                        {objectFromUsersArray.address.street}, {objectFromUsersArray.address.city}
                    </li>
                ))}
            </ul>
        </div>
    );
};
