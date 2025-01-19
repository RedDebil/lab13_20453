import { getMeal } from '@/lib/meals';
import classes from './page.module.css';
import Image from 'next/image';

export default async function MealPage({ params }) {
  const { someName: slug } = await params;
  const meal = getMeal(slug);

  if (!meal) {
    return (
      <div className={classes.loading}>
        <p>Meal not found. Please check the URL or go back to the meals page.</p>
      </div>
    );
  }

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by {meal.creator}{' '}
            (<a href={`mailto:${meal.creator_email}`}>{meal.creator_email}</a>)
          </p>
        </div>
      </header>
      <div className={classes.summary}>
        <p>{meal.summary}</p>
      </div>
      <section className={classes.instructions}>
        <h2>Instructions</h2>
        <p>{meal.instructions}</p>
      </section>

    </div>
  );
}
