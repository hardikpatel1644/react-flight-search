export const envVar = (variableName) => {
  const envVarName = `REACT_APP_${variableName}`;
  const value = process.env[envVarName];
  if (!value) {
    throw new Error(`Missing ${envVarName} environment variable`);
  }

  return value;
};
