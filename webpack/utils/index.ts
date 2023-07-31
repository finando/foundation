import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';

interface PackageJson {
  dependencies: Record<string, string>;
  peerDependencies: Record<string, string>;
}

export function externalDependencies(): string[] {
  const packageJsonPath = resolve(cwd(), 'package.json');

  if (!existsSync(packageJsonPath)) {
    return [];
  }

  try {
    const { dependencies = {}, peerDependencies = {} } = JSON.parse(
      readFileSync(packageJsonPath, 'utf-8').toString(),
    ) as PackageJson;

    return [
      ...new Set([
        ...Object.keys(dependencies),
        ...Object.keys(peerDependencies),
      ]),
    ];
  } catch {
    return [];
  }
}
