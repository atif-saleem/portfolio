import { useForm } from "react-hook-form";
import styles from "./ContactPage.module.css"; // Import CSS file

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message Sent!");
  };

  return (
    <div className={styles.contact_form_container}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <div className={styles.form_group}>
          <label>Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>

        {/* Email Input */}
        <div className={styles.form_group}>
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/, message: "Invalid email address" },
            })}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        {/* Message Input */}
        <div className={styles.form_group}>
          <label>Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            rows="4"
          ></textarea>
          {errors.message && (
            <p className={styles.error}>{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.submit_btn}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
