import React from "react";
import {PrismLight} from "react-syntax-highlighter";

import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown'
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import java from "react-syntax-highlighter/dist/cjs/languages/prism/java";
import cpp from "react-syntax-highlighter/dist/cjs/languages/prism/cpp";
import kotlin from "react-syntax-highlighter/dist/cjs/languages/prism/kotlin";
import csharp from "react-syntax-highlighter/dist/cjs/languages/prism/csharp";

PrismLight.registerLanguage('tsx', tsx)
PrismLight.registerLanguage('typescript', typescript)
PrismLight.registerLanguage('scss', scss)
PrismLight.registerLanguage('bash', bash)
PrismLight.registerLanguage('markdown', markdown)
PrismLight.registerLanguage('json', json)
PrismLight.registerLanguage('java',java)
PrismLight.registerLanguage('cpp',cpp)
PrismLight.registerLanguage('kotlin',kotlin)
PrismLight.registerLanguage('csharp',csharp)

export const SyntaxHighlighter = ({...props}) => {
    return (
        <PrismLight
            {...props}
        />
    )
}