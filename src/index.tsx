import * as React from "react";

import "./style.css";

interface SteamLevelProps extends React.HTMLAttributes<HTMLDivElement> {
  level: number;
  size?: number;
}

const SteamLevel: React.FC<SteamLevelProps> = (props) => {
  const { level, size = 32, ...rest } = props;

  if (level < 0) {
    throw new Error("The level must be greater than 0");
  }

  if (level > 5299) {
    throw new Error("The level must be less than 5299");
  }

  const getLevelClass = React.useCallback(
    (level = 0) => {
      const lvl = Math.floor(level / 100) * 100 || Math.floor(level / 10) * 10;
      const lvl_plus = Math.floor((level - lvl) / 10) * 10;

      if (lvl < 100) {
        return `lvl_${lvl}`;
      }

      return `lvl_${lvl} lvl_plus_${lvl_plus}`;
    },
    [level]
  );

  return (
    <div
      className={`profileLevel ${getLevelClass(level)}`}
      style={{
        fontSize: `${level < 100 ? size / 1.75 : size / 2.28}px`,
        height: `${size}px`,
        width: `${size}px`,
        lineHeight: `${level < 100 ? size - 2 : size}px`,
        backgroundSize: `${size}px`,
        backgroundPosition: `0 ${-size * Math.trunc((level % 100) / 10)}px`,
      }}
      {...rest}
    >
      <span className="profileLevelNum">{level}</span>
    </div>
  );
};

export default SteamLevel;
