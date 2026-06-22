export const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1]
export const DUR = 0.8
export const STEP = 0.08

/** Use with animate={inView ? { opacity: 1, y: 0 } : {}} */
export function up(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    transition: { duration: DUR, delay, ease: EASE },
  }
}
