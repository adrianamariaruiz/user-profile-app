import style from "./about.module.css"

const About = () => {
  return (
    <section className={style.about__section}>
      <div className={style.about}>
        <h1 className={style.h1}>Acerca de mi</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusamus vero, in vel natus quam facilis praesentium enim ducimus suscipit molestias quas iste laboriosam perferendis? Vero possimus, eum dicta praesentium nam saepe optio culpa debitis eaque voluptas itaque vel qui! Cumque velit obcaecati, deserunt est impedit itaque sit. Aspernatur, magni!</p>
      </div>
    </section>
  )
}

export default About