import { useQuery } from "@tanstack/react-query";
import { User } from "@/stores/useAuthStore";

import { api } from "@/configs/api-client";

const getUser = async (): Promise<User> => {
  const { data } = await api.get<User>("/user");
  return data;
};

export const useUserQuery = () => {
  return useQuery<User>({
    queryKey: ["user"],
    queryFn: getUser,
  });
};
