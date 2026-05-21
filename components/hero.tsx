import Image from "next/image"
import styles from "../styles/style.module.css"

export function Hero() {
  return (
    <section id="home" className={`pt-24 pb-16 px-4 ${styles.heroSection}`} >
      <div className={`container mx-auto ${styles.parthero}`}>


          {/* Profile Image */}
          <div className={`flex justify-center lg:justify-start ${styles.heroimgcontent}`} data-animate="hero-image">
            <div className="relative" >
              <div className={`w-95  overflow-hidden border-4 border-slate-700 ${styles.heroImage}`} >
                <Image
                  src="/images/hussein-photo.jpg"
                  alt="Hussein Nahal"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`text-center sm:text-left ${styles.heroContent}`} data-animate="hero-info">
            <p className="text-gray-400 mb-2">Hi, my name is</p>
            <h1 className={` text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-balance`}>Hussein Nahal</h1>
            <h2 className="text-base sm:text-xl lg:text-3xl mb-6 text-balance 
               bg-gradient-to-r from-[#ffffff] to-[#b0b0b0] 
               bg-clip-text text-transparent">
              I engineer <span className="text-yellow-500">Scalable Full-Stack</span> solutions
            </h2>
            <p className="text-gray-400 text-base sm-text-lg mb-8 max-w-2xl text-pretty">
                I am a Full-Stack Developer specializing in building scalable web applications with polished user interfaces and robust architectures.
            </p>
            <a href="#projects" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 sm-px-8 py-3 text-base sm-text-lg" style={{borderRadius: '8px'}}>
              Check My Projects
            </a>
          </div>

        </div>


        {/* Bottom Text */}
        {/* <div className="mt-16 text-center lg:text-left">
          <p className="text-gray-400 text-lg">
            I create reliable <span className="text-yellow-500">full-stack</span> solutions that power the{" "}
            <span className="text-yellow-500">web</span>
          </p>
          <p className="text-gray-500 mt-2">
            From planning to production, my focus is on building software that solves problems and enhances user
            experiences.
          </p>
        </div> */}
    </section>
  )
}
