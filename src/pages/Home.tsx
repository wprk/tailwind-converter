import React, { useState } from 'react'
import classNames from 'classnames'

import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/Container';
import Navbar from "../components/Navbar";
import Editor from '../components/Editor';
import { useMutation } from '@apollo/react-hooks';
import { CONVERT_HTML } from '../data/mutations';

const Home = () => {
  const [focusedEditor, setFocusedEditor] = useState<string|null>(null)
  const [htmlContents, setHtmlContents] = useState<string>('')
  const [componentContents, setComponentContents] = useState<string>('')
  const [convertHtml] = useMutation(CONVERT_HTML)

  const convert = async (props: any) => {
    let htmlToConvert = htmlContents

    if (props && props.text) {
      htmlToConvert = props.text
    }
    
    const componentResponse = await convertHtml({ variables: {
      html: encodeURI(htmlToConvert),
      framework: 'react',
      parameters: 'functional'
    }})

    if (componentResponse?.data?.convertHtml?.component) {
      setFocusedEditor('component')
      setComponentContents(componentResponse.data.convertHtml.component)
    }
  }

  return (
    <div>
      <Navbar />
      <Container>
        <div className="mt-8 flex flex-wrap -mx-2">
          <div className={classNames([
            'w-full mb-4 px-2',
            {'md:w-6/12': focusedEditor === 'html'},
            {'md:w-4/12': focusedEditor === 'component'},
            {'md:w-5/12': !focusedEditor}
          ])}>
            <Card>
              <label htmlFor="html" className="block text-sm font-medium leading-5 text-gray-700">
                Your HTML
              </label>
              <Editor
                id="html"
                contents={htmlContents}
                mode="html"
                onChange={(text: string) => setHtmlContents(text)}
                onFocus={() => setFocusedEditor('html')}
                onPaste={(text: string) => convert(text)}
                placeholder="Paste your html or enter html and click Convert."
              />
            </Card>
          </div>
          <div className="w-full md:w-2/12 mb-4 flex justify-center">
            <div className="flex items-center">
              <Button text="Convert" onClick={() => convert(htmlContents)} />
            </div>
          </div>
          <div className={classNames([
            'w-full mb-4 px-2',
            {'md:w-6/12': focusedEditor === 'component'},
            {'md:w-4/12': focusedEditor === 'html'},
            {'md:w-5/12': !focusedEditor}
          ])}>
            <Card>
              <label htmlFor="html" className="block text-sm font-medium leading-5 text-gray-700">
                Your component
              </label>
              <Editor
                id="component"
                contents={componentContents}
                mode="javascript"
                onFocus={() => setFocusedEditor('component')}
                placeholder="Your generated component will go here. Paste your html then click Convert."
              />
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home
