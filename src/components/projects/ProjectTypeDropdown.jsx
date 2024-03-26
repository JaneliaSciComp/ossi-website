import * as React from "react";
import PropTypes from "prop-types";
import { Select as BaseSelect } from "@mui/base/Select";
import { Option as BaseOption } from "@mui/base/Option";
import clsx from "clsx";
import { TbSelector } from "react-icons/tb";
import {
  selectedProjectType,
  handleProjectTypeDropdown,
} from "./stores/selectedProjectTypeStore.js";
import { useStore } from "@nanostores/react";

const getOptionColorClasses = ({ selected, highlighted, disabled }) => {
  let classes = "";
  if (disabled) {
    // Note - the space at the beginning of each of these class segments is important. If removed, classes will
    // smush together and then the beginning/ending class of each line won't be implemented
    classes += " text-slate-400 dark:text-slate-700";
  } else {
    classes +=
      " hover:dark:bg-neutral-800 hover:bg-slate-100 hover:dark:text-slate-300 hover:text-slate-900";
  }
  if (selected) {
    classes +=
      " bg-primary dark:bg-primary hover:bg-primary hover:dark:bg-primary text-white dark:text-slate-100";
    // } else if (highlighted) {
    //   classes +=
    //     " bg-slate-100 dark:bg-neutral-800 text-slate-900 dark:text-slate-300";
  }

  return classes;
};

const Option = React.forwardRef((props, ref) => {
  return (
    <BaseOption
      ref={ref}
      {...props}
      slotProps={{
        root: ({ selected, highlighted, disabled }) => ({
          className: `list-none p-2 rounded-lg cursor-default last-of-type:border-b-0 ${getOptionColorClasses(
            { selected, highlighted, disabled }
          )}`,
        }),
      }}
    />
  );
});

const Button = React.forwardRef(function Button(props, ref) {
  const { ownerState, ...other } = props;
  return (
    <button type="button" {...other} ref={ref}>
      {other.children}
      <TbSelector />
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node,
  ownerState: PropTypes.object.isRequired,
};

//Here is the customization of the component ------------------------------------
export default function ProjectTypeDropdown() {
  const $selectedProjectType = useStore(selectedProjectType);
  console.log("selected project type in dropdown: ", $selectedProjectType);
  const handleChange = (_, selectedArray) => {
    handleProjectTypeDropdown(selectedArray); // Update your store based on the new value
  };

  return (
    <Select multiple value={$selectedProjectType} onChange={handleChange}>
      <Option
        key="OSSI - current"
        value="OSSI - current"
        className="cursor-pointer my-1"
      >
        OSSI - current
      </Option>
      <Option
        key="OSSI - previous"
        value="OSSI - previous"
        className="cursor-pointer my-1"
      >
        OSSI - previous
      </Option>
      <Option key="Other" value="Other" className="cursor-pointer my-1">
        Other
      </Option>
    </Select>
  );
}
// -----------------------------------------------------------------

const resolveSlotProps = (fn, args) =>
  typeof fn === "function" ? fn(args) : fn;

// I added the prop "multiple" to allow for multiple selections
const Select = React.forwardRef(function CustomSelect(props, ref) {
  return (
    <BaseSelect
      ref={ref}
      {...props}
      className={clsx("CustomSelect", props.className)}
      slots={{
        root: Button,
      }}
      slotProps={{
        ...props.slotProps,
        root: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.root,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              `relative text-sm font-sans box-border w-11/12 px-3 py-2 min-h-10 rounded-lg text-left bg-white dark:bg-neutral-900 border border-solid border-slate-200 dark:border-neutral-700 text-slate-900 dark:text-neutral-300 transition-all hover:bg-slate-50 dark:hover:bg-neutral-800 outline-0 shadow-md shadow-slate-100 dark:shadow-slate-900 ${
                ownerState.focusVisible
                  ? "focus-visible:ring-4 ring-purple-500/30 focus-visible:border-purple-500 focus-visible:dark:border-purple-500"
                  : ""
              } [&>svg]:text-base	[&>svg]:absolute [&>svg]:h-full [&>svg]:top-0 [&>svg]:right-2.5`,
              resolvedSlotProps?.className
            ),
          };
        },
        listbox: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.listbox,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              `text-sm font-sans p-1.5 my-3 w-80 min-h-2 rounded-xl overflow-auto outline-0 bg-white dark:bg-neutral-900 border border-solid border-slate-200 dark:border-neutral-700 text-slate-900 dark:text-neutral-300 shadow shadow-slate-200 dark:shadow-neutral-900`,
              resolvedSlotProps?.className
            ),
          };
        },
        popup: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.popup,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(` z-10`, resolvedSlotProps?.className),
          };
        },
      }}
    />
  );
});

Select.propTypes = {
  className: PropTypes.string,
  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  slotProps: PropTypes.shape({
    listbox: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    popup: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),
};
