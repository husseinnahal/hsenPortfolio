import styles from "../styles/style.module.css"

export function About() {
  return (
    <section id="about" className={`pt-20 pb-16 px-4 `} >

        {/* Bottom Text */}
        <div className={` text-left ${styles.aboutcontent}`} >
          <p className={`text-white-400 text-xl ${styles.aboutmaincontent}`} data-animate="about">
            I create reliable <span className="text-yellow-500">full-stack</span> solutions that power the{" "}
            <span className="text-yellow-500">web</span>
          </p>
          <p className={`text-gray-400 mt-2 ${styles.aboutparaghraph}`} data-animate="aboutinfo">
            I am a Computer Science graduate and Full-Stack Developer specializing in building end-to-end web applications. I combine responsive user interfaces with robust APIs, secure authentication, and optimized database designs to solve real-world problems.
          </p>
        </div>

    </section>
  )
}
