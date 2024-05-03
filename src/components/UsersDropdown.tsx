import { Users } from "../utils/types";

type UsersDropdownProps = {
  users: Users[];
  onSelectUser: (userId: number) => void;
  disabled: boolean;
};

function UsersDropdown({ users, onSelectUser, disabled }: UsersDropdownProps){
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      <label className="" htmlFor="usersList">Filter By User</label>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
        disabled={disabled}
        id="usersList"
        onChange={(event) => {
          const selectedUserId = parseInt(event.target.value);
          onSelectUser(selectedUserId);
        }}
      >
        <option value="">Select a User</option>
        {users.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UsersDropdown;
