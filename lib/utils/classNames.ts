type Value = string | number | boolean | undefined | null;
type Mapping = { [key: string]: any };
type Argument = Value | Mapping | Argument[];

export function cx(...args: Argument[]): string {
  let classes: any = [];
  args.forEach((item) => {
    if (typeof item === 'string' && item) {
      classes.push(item);
    }
    if (typeof item === 'object' && item) {
      if (!Array.isArray(item)) {
        Object.keys(item).forEach((key) => {
          if (item[key]) {
            classes.push(key);
          }
        });
      } else if (Array.isArray(item) && item.length) {
        classes.push(cx.apply(null, item));
      }
    }
  });
  classes = classes.filter((item: Value, index: number) => classes.indexOf(item) === index).join(' ');
  return classes;
}
