import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$, z } from "@builder.io/qwik-city";
import {
  type InitialValues,
  useForm,
  zodForm$,
  formAction$,
} from "@modular-forms/qwik";

const loginSchema = z.object({
  email: z.string().min(1, "Please enter your email."),
  password: z.string().min(1, "Please enter your password."),
});

type LoginForm = z.input<typeof loginSchema>;

export const useFormLoader = routeLoader$<InitialValues<LoginForm>>(() => {
  console.log("useFormLoader");
  return {
    email: "dummy@example.com",
    password: "12345",
  };
});

export const useFormAction = formAction$<LoginForm>((values, { redirect }) => {
  console.log("useFormAction", values);
  throw redirect(302, "/account/");
}, zodForm$(loginSchema));

export default component$(() => {
  const [, { Form, Field }] = useForm<LoginForm>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: zodForm$(loginSchema),
  });

  return (
    <Form>
      Login page
      <Field name="email">
        {(field, props) => (
          <div>
            <input
              {...props}
              class="border-2 border-black rounded my-2"
              type="email"
              required
              value={field.value}
            />
            {field.error && <div>{field.error}</div>}
          </div>
        )}
      </Field>
      <Field name="password">
        {(field, props) => (
          <div>
            <input
              {...props}
              class="border-2 border-black rounded my-2"
              type="password"
              required
              value={field.value}
            />
            {field.error && <div>{field.error}</div>}
          </div>
        )}
      </Field>
      <input class="rounded bg-blue-500 text-white p-2" type="submit" />
    </Form>
  );
});

export const head: DocumentHead = {
  title: "login",
};
