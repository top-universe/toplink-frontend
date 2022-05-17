<template>
  <main>
    <div class="heading">
      <h2>FAQs</h2>
      <p>How can we help you?</p>
      <form>
        <input
          type="text"
          class="form-input"
          placeholder="Please enter your question"
        />
        <input class="form-btn" type="submit" value="Send" />
      </form>
    </div>

    <section>
      <accordion-tab question="What is Synque?"> </accordion-tab>
      <accordion-tab
        question="When I deactivate my account, do I lose all my information?"
      >
      </accordion-tab>
      <accordion-tab
        question="My payment history isn’t reflecting my recent payments and I’ve been debited, what can i do?"
      >
      </accordion-tab>
      <accordion-tab
        question="If my account is off, can I still get notifications?"
      >
      </accordion-tab>
      <accordion-tab question="How many pictures am I allowed to upload?">
        There is no limit to the number of images you can upload on your
        account, as number depends on the owner of the account.
      </accordion-tab>
      <accordion-tab
        question="How do I launch or get my page published or seen by others?"
      >
      </accordion-tab>
      <accordion-tab
        question="How do I get the link to my page in order to share it?"
      >
      </accordion-tab>
      <accordion-tab question="How many links am I allowed to add to my page?">
        Profile owners on the Synq.ue App can upload 10 links, that includes
        their social media links and any other links. They can also upload 6
        media files including images, audio, podcasts, videos. If they intend to
        add more links or media, they would have to subscribe for the premium
        service.
      </accordion-tab>
      <accordion-tab
        question="I am having issues editing my profile, I get error messages
            everytime, what do I do?"
      >
      </accordion-tab>
    </section>
  </main>
</template>

<script>
import AccordionTab from "@/components/AccordionTab.vue";
export default {
  components: { AccordionTab },
  name: "FaqView",
};
</script>

<style scoped>
main {
  padding: 4rem 8rem 4rem 2.5rem;
}
.heading {
  padding-left: 3.2rem;
  margin-bottom: 4rem;
}

.heading h2 {
  font-size: 3.2rem;
  font-weight: 500;
}

.heading p {
  font-size: 1.8rem;
  color: var(--black);
  opacity: 0.7;
  font-weight: 400;
  margin-block: 1.6rem 2rem;
}

form {
  background-color: #eeeeee;
  border-radius: 8px;
  display: flex;
  height: 72px;
}

form .form-input {
  background-color: transparent;
  width: 100%;
  font-size: 1.6rem;
  padding: 29px 40px;
  border-radius: 8px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: none;
  outline: none;
}

form .form-input::placeholder {
  color: #525252;
  opacity: 0.5;
  font-weight: 400;
  font-size: 1.4rem;
}

form .form-btn {
  background-color: var(--purple);
  color: white;
  font-size: 1.6rem;
  border-radius: 8px;
  height: 100%;
  padding-inline: 7.5rem;
  border: none;
  cursor: pointer;
}
</style>