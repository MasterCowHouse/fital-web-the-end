import { AxiosError } from "axios";
import { axiosInstance } from "./axiosInstance";

export type BaseResponseTypes<T = any> = {
  success: boolean;
  errors?: string[];
  data?: T;
  error: {
    message: string;
    error: string;
    statusCode: 400;
  };
};

export interface DataContact {
  createLeadDto: CreateLeadDto;
  createContactDto: CreateContactDto;
}

export interface CreateContactDto {
  name: string;
  telephone: string;
  email: string;
}

export interface CreateLeadDto {
  owner_id: string;
  campaign_id: string;
}

export const createContact = async (data: DataContact) => {
  try {
    const response = await axiosInstance.post<BaseResponseTypes<DataContact>>(
      `api/lead/create-with-contact`,
      data
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError<BaseResponseTypes<DataContact>>;
    return err.response?.data;
  }
};
