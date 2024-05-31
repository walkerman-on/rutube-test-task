import { FeedbackPage } from 'pages/feedback';
import { AppRoutesProps } from './types';
import { getFeedback, getQuestions, getMain, getNotFound, getResult } from 'app/providers/router/routeConfig/routes';
import { NotFoundPage } from 'pages/notFound';
import { MainPage } from 'pages/main';
import { ResultPage } from 'pages/result';
import { QuestionsPage } from 'pages/questions';

export enum AppRoutes {
  FEEDBACK = 'feedback',
  QUESTIONS = 'questions',
  RESULT = 'result',
  MAIN = 'main',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.FEEDBACK]: getFeedback(),
  [AppRoutes.QUESTIONS]: getQuestions(),
  [AppRoutes.RESULT]: getResult(),
  [AppRoutes.MAIN]: getMain(),
  [AppRoutes.NOT_FOUND]: getNotFound(),
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.FEEDBACK]: {
    path: RoutePath.feedback,
    element: <FeedbackPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  [AppRoutes.QUESTIONS]: {
    path: RoutePath.questions,
    element: <QuestionsPage />,
  },
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.RESULT]: {
    path: RoutePath.result,
    element: <ResultPage />,
  },
};