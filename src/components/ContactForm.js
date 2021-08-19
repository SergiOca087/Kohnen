import React from "react";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: var(--grey);
    padding: 3rem;
    max-width: 75.2rem;

    input,
    textarea {
        height: 6.8rem;
        border: none;
        letter-spacing: 0.2px;
        font-size: 1.6rem;
        margin-bottom: 2rem;
        padding-left: 2rem;

        ::placeholder {
            color: rgba(91, 91, 91, 0.5);
        }
    }

    textarea {
        height: 12.8rem;
        padding: 2rem 0 0 2rem;
    }

    input[type="submit"] {
        max-width: 19rem;
        border: 1px solid var(--primary);
        height: 5.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        text-transform: uppercase;
        margin-bottom: 0;
        transition: all 300ms;
        color: var(--text);
        padding: 0;

        &:hover {
            color: #fff;
            background-color: var(--primary);
        }
    }

    .validation {
        padding: 2rem 0;

        p {
            font-size: 12px;
            color: var(--primary);
        }
    }
`;

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    const hasKeys = !!Object.keys(errors).length;

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            {console.log("errors", errors)}
            <input
                placeholder="Name"
                {...register("fullname", { required: "Name is required" })}
            />

            <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
            />

            <input
                placeholder="Subject"
                {...register("subject", { required: false })}
            />
            <textarea
                placeholder="Message"
                {...register("message", { required: " Message is required" })}
            />

            <input type="submit" value="Send Message" />

            <div
                className="validation"
                css={css`
                    ${hasKeys ? "display: block" : "display: none"}
                `}
            >
                <p>
                    {errors.fullname?.type === "required" &&
                        errors.fullname.message}
                </p>

                <p>
                    {errors.email?.type === "required" && errors.email.message}
                </p>

                <p>
                    {errors.message?.type === "required" &&
                        errors.message.message}
                </p>
            </div>
        </StyledForm>
    );
}
