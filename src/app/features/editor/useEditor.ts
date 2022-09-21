import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
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

  const handleBlur = () => {
    if (unsavedChanges) {
      dispatch(saveJournal())
    }
  }

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  })

  useEffect(() => {
    if (unsavedChanges) {
      console.log('unsavedChanges')
      const timer = setTimeout(() => {
        console.log('%c saving...', 'background: green; color: black')
        dispatch(saveJournal())
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [unsavedChanges])

  useEffect(() => {
    console.log('in view', inView)
  }, [inView])

  useEffect(() => {
    dispatch(startEditor(activeJournal))
  }, [])

  return {
    swiping,
    handleTitle,
    handleContent,
    handleBlur,
    journal,
    pageIndex,
    saving,
    ref,
    // inView,
    // entry,
  }
}

export default useEditor
