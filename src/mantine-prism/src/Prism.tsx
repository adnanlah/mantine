import React, { forwardRef } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import {
  ActionIcon,
  useMantineTheme,
  Tooltip,
  DefaultProps,
  MantineColor,
  ClassNames,
  Box,
} from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { CopyIcon } from './CopyIcon';
import { getPrismTheme } from './prism-theme';
import useStyles from './Prism.styles';

export type PrismStylesNames = ClassNames<typeof useStyles>;

export interface PrismProps
  extends DefaultProps<PrismStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Code which will be highlighted */
  children: string;

  /** Programming language that should be highlighted */
  language: Language;

  /** True to remove copy to clipboard button */
  noCopy?: boolean;

  /** Copy button tooltip */
  copyLabel?: string;

  /** Copy button tooltip in copied state */
  copiedLabel?: string;

  /** Display line numbers */
  withLineNumbers?: boolean;

  /** Highlight line at given line number with color from theme.colors */
  highlightLines?: Record<string, { color: MantineColor; label?: string }>;

  /** Force color scheme, defaults to theme.colorScheme */
  colorScheme?: 'dark' | 'light';
}

export const Prism = forwardRef<HTMLDivElement, PrismProps>(
  (
    {
      className,
      children,
      language,
      noCopy = false,
      classNames,
      styles,
      copyLabel = 'Copy code',
      copiedLabel = 'Copied',
      withLineNumbers = false,
      highlightLines = {},
      colorScheme,
      ...others
    }: PrismProps,
    ref
  ) => {
    const theme = useMantineTheme();
    const clipboard = useClipboard();
    const { classes, cx } = useStyles(
      { colorScheme: colorScheme || theme.colorScheme },
      { classNames, styles, name: 'Prism' }
    );

    return (
      <Box className={cx(classes.root, className)} ref={ref} {...others}>
        {!noCopy && (
          <Tooltip
            data-mantine-copy
            className={classes.copy}
            label={clipboard.copied ? copiedLabel : copyLabel}
            position="left"
            placement="center"
            transition="fade"
            withArrow
            arrowSize={4}
            gutter={8}
            color={clipboard.copied ? 'teal' : undefined}
          >
            <ActionIcon
              aria-label={clipboard.copied ? copiedLabel : copyLabel}
              onClick={() => clipboard.copy(children)}
            >
              <CopyIcon copied={clipboard.copied} />
            </ActionIcon>
          </Tooltip>
        )}

        <Highlight
          {...defaultProps}
          theme={getPrismTheme(theme, colorScheme || theme.colorScheme)}
          code={children}
          language={language}
        >
          {({
            className: inheritedClassName,
            style: inheritedStyle,
            tokens,
            getLineProps,
            getTokenProps,
          }) => (
            <pre className={cx(classes.code, inheritedClassName, className)} style={inheritedStyle}>
              {tokens
                .map((line, index) => {
                  if (
                    index === tokens.length - 1 &&
                    line.length === 1 &&
                    line[0].content === '\n'
                  ) {
                    return null;
                  }

                  const lineNumber = index + 1;
                  const lineProps = getLineProps({ line, key: index });
                  const shouldHighlight = lineNumber in highlightLines;
                  const lineColor =
                    theme.colorScheme === 'dark'
                      ? theme.fn.rgba(
                          theme.fn.themeColor(highlightLines[lineNumber]?.color, 9),
                          0.25
                        )
                      : theme.fn.themeColor(highlightLines[lineNumber]?.color, 0);

                  return (
                    <div
                      {...lineProps}
                      className={cx(classes.line, lineProps.className)}
                      style={{ ...(shouldHighlight ? { backgroundColor: lineColor } : null) }}
                    >
                      {withLineNumbers && (
                        <div
                          className={classes.lineNumber}
                          data-mantine-line-number
                          style={{
                            color: shouldHighlight
                              ? theme.fn.themeColor(
                                  highlightLines[lineNumber]?.color,
                                  theme.colorScheme === 'dark' ? 5 : 8
                                )
                              : undefined,
                          }}
                        >
                          {highlightLines[lineNumber]?.label || lineNumber}
                        </div>
                      )}

                      <div className={classes.lineContent}>
                        {line.map((token, key) => {
                          const tokenProps = getTokenProps({ token, key });
                          return (
                            <span
                              {...tokenProps}
                              style={{
                                ...tokenProps.style,
                                color: shouldHighlight
                                  ? theme.fn.themeColor(
                                      highlightLines[lineNumber]?.color,
                                      theme.colorScheme === 'dark' ? 5 : 8
                                    )
                                  : (tokenProps?.style?.color as string),
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })
                .filter(Boolean)}
            </pre>
          )}
        </Highlight>
      </Box>
    );
  }
);

Prism.displayName = '@mantine/prism/Prism';
