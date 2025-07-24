'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| IT Across the Organization" textStyles="text-center" />
      <TitleText
        title={(
          <>Connect with IT experts and resources across all departments to support your work</>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
      <video
        src='/collegevideo.mp4'
        autoPlay
        loop
        muted
        controls
        width="100%"
        height="100%"
        style={{ objectFit: 'cover', borderRadius: '20px' }}
      />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
