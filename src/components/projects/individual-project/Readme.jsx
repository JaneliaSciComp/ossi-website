import { getReadme } from "../../utils/githubApiHelper";

export default function Readme({ githubLink }) {
    let readmeHtml
    try {
        readmeHtml = await getReadme(githubLink);
    } catch {
        console.error("Could not access GitHub README")
    }

  return <div set:html={readmeHtml} />;
}
