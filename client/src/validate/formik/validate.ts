import toast from "react-hot-toast";
import { Errors, Values } from "@/types/validation/validation";
import {
  FORM_VALIDATION_PASSWORD,
  FORM_VALIDATION_RESET_PASSWORD,
  FORM_VALIDATION_USERNAME,
} from "@/validate/yup/yup";

/** validate login page username */
//This function is used to validate the username field if it is empty or not and if it contains any space or not.
export async function usernameValidate(values: Values) {
  let errors: Errors = {};

  await FORM_VALIDATION_USERNAME.validate(values, { abortEarly: false }).catch(
    function (err) {
      err.inner.forEach((error: any) => {
        errors[error.path] = toast.error(error.message);
      });
    },
  );

  return errors;
}

/**validate login page password */

//This function is used to validate the password field if it is empty or not and if it contains any space or not.
export async function passwordValidate(values: Values) {
  let errors: Errors = {};

  await FORM_VALIDATION_PASSWORD.validate(values, { abortEarly: false }).catch(
    function (err) {
      err.inner.forEach((error: any) => {
        errors[error.path] = toast.error(error.message);
      });
    },
  );

  return errors;
}

/**validate reset password page */

//This function is used to validate the password field and the confirmation password field.
export async function resetPasswordValidate(values: Values) {
  let errors: Errors = {};

  await FORM_VALIDATION_RESET_PASSWORD.validate(values, {
    abortEarly: false,
  }).catch(function (err) {
    err.inner.forEach((error: any) => {
      errors[error.path] = toast.error(error.message);
    });
  });

  return errors;
}
