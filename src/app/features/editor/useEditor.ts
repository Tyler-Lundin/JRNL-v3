import { useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import { useAppDispatch, useAppSelector } from '../../hooks'
import {
  nextPage,
  prevPage,
  saveJournal,
  setPageContent,
  setPageTitle,
  startEditor,
} from './editorSlice'

/**
 * Editor.tsx PACKAGE
 */
export const useEditor = () => {
  const dispatch = useAppDispatch()
  const { activeJournal } = useAppSelector((state) => state.journal)
  const { journal, pageIndex, unsavedChanges, saving } = useAppSelector((state) => state.editor)

  const swiping = useSwipeable({
    onSwipedRight: () => dispatch(prevPage()),
    onSwipedLeft: () => dispatch(nextPage()),
  })

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPageTitle(e.target.value))
  }

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setPageContent(e.target.value))
  }

  // useEffect(() => {
  //   if (unsavedChanges) {
  //     console.log('unsavedChanges')
  //     const timer = setTimeout(() => {
  //       console.log('%csaving...', 'background: #222; color: #bada55')
  //       dispatch(saveJournal())
  //     }, 1000)
  //     return () => clearTimeout(timer)
  //   }
  // }, [unsavedChanges])

  useEffect(() => {
    dispatch(startEditor(activeJournal))
  }, [])

  return {
    swiping,
    handleTitle,
    handleContent,
    journal,
    pageIndex,
    saving,
  }
}

export default useEditor