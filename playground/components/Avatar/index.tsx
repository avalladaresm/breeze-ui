import {
  CreditCardIcon,
  OfficeBuildingIcon,
  TrashIcon,
  UsersIcon
} from "@heroicons/react/solid";
import Avatar from "../../../src/components/Avatar";
import AvatarInitials from "../../../src/components/AvatarInitials";
import colors from "../../../src/utils/colors";

export default function PlaygroundAvatar() {
  return (
    <div className="flex items-center space-x-3 p-5 max-w-7xl bg-white m-2 rounded-md">
      <div className="flex">
        <div className="flex-col space-y-3 items-start">
          <h1 className="flex text-2xl ">Avatar</h1>
          <div className="flex space-x-3">
            <AvatarInitials size="4xl" initials="AV" />
            <Avatar
              size="sm"
              roundedRadius="full"
              bgColor={colors.blue.base}
              icon={<OfficeBuildingIcon className="w-full h-full" />}
            />
            <Avatar size="md" />
            <Avatar size="lg" roundedRadius="none" />
            <Avatar size="xl" />
            <Avatar size="2xl" />
            <AvatarInitials size="2xl" roundedRadius="lg" initials="AV" />
            <AvatarInitials size="3xl" roundedRadius="lg" initials="AV" />
            <AvatarInitials size="4xl" initials="rV" />
            <Avatar
              size="3xl"
              icon={<UsersIcon className="w-full h-full" />}
              iconColor="red"
              bgColor={colors.red.light}
            />
            <Avatar
              size="5xl"
              icon={<OfficeBuildingIcon className="w-full h-full" />}
              iconColor="red"
              bgColor={colors.red.light}
            />
            <Avatar size="7xl" />
            <Avatar
              size="7xl"
              iconColor={colors.green.base}
              roundedRadius="lg"
              icon={
                <svg
                  className="h-full w-full"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
