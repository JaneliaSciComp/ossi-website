import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../@/components/ui/tabs";

export default function ProjectPageTabs({ overview, readme, content }) {
  const contentTabTitle = readme ? "GitHub README" : "Details";
  return (
    <Tabs className="min-h-[325px] pt-6 lg:pt-0" defaultValue="overview">
      <TabsList className="p-0 rounded-none flex font-sans justify-around content-between w-full">
        <TabsTrigger
          value="overview"
          className="text-md py-4 rounded-t-lg w-full bg-transparent dark:bg-slate-700
          data-[state=active]:text-white
          data-[state=active]:dark:text-white
          data-[state=active]:bg-primary
          data-[state=active]:dark:bg-primary
          data[state=active]:border-t-0
          data-[state=inactive]:border 
          border-color-primary text-black dark:text-slate-300 
          focus:text-white  bg-opacity-40"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="details"
          className="text-md py-4 rounded-t-lg w-full bg-transparent dark:bg-slate-700
          data-[state=active]:text-white
          data-[state=active]:dark:text-white
          data-[state=active]:bg-primary
          data-[state=active]:dark:bg-primary
          data[state=active]:border-t-0
          data-[state=inactive]:border 
          border-color-primary text-black dark:text-slate-300 
          focus:text-white  bg-opacity-40"
        >
          {contentTabTitle}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="w-full h-full pt-6 ">
        {overview}
      </TabsContent>
      <TabsContent
        value="details"
        className=" w-full min-h-full pt-6 prose prose-sm lg:prose-md dark:prose-invert dark:prose-headings:text-slate-300 prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:font-bold prose-a:text-primary dark:prose-a:text-blue-400 prose-img:rounded-md prose-img:shadow-lg"
      >
        {readme}
        {content}
      </TabsContent>
    </Tabs>
  );
}
