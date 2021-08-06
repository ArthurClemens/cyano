import { Component } from 'cyano';
import { Router } from 'router5';

export type RouteData = {
  name: string;
  label: string;
  path: string;
  component: Component;
};

export type AppRouter = Router<Record<string, unknown>>;
