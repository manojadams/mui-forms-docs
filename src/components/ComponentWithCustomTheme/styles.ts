export const ColorsStyles = {
    ".MuiOutlinedInput-root": {
        color: "#000",
        "&:hover": {
            ".MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--primary-color)"
            }
        },
        "&.Mui-error": {
            "&:hover": {
                ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "#d32f2f"
                }
            }
        },
        "&.Mui-focused": {
            ".MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--primary-color)"
            }
        }
    },
    ".MuiFormLabel-root": {
        "&.Mui-focused": {
            color: "var(--primary-color)"
        },
        "&.Mui-error": {
            color: "#d32f2f"
        }
    }
};