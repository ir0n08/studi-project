using NUnit.Framework;
using OpenQA.Selenium;
using Selenium.Essentials;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Interactions;
using AventStack.ExtentReports;
using AventStack.ExtentReports.Reporter;
using AventStack.ExtentReports.Reporter.Configuration;
using System;

namespace automated_testing_screenshot
{
    internal class Screenshot
    {
        protected string path;
        public Screenshot(string path)
        {
            this.path = path;
        }
        public string GetPath()
        {
            return path;
        }
        public void TakeScreenshot(IWebDriver driver, String filename, int count)
        {
            try
            {
                OpenQA.Selenium.Screenshot screenshot = ((ITakesScreenshot)driver).GetScreenshot();
                screenshot.SaveAsFile(path + filename + count.ToString() + ".png", ScreenshotImageFormat.Png);
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        public void TakeScreenshot(IWebDriver driver, String filename)
        {
            try
            {
                OpenQA.Selenium.Screenshot screenshot = ((ITakesScreenshot)driver).GetScreenshot();
                screenshot.SaveAsFile(@path + filename + ".png", ScreenshotImageFormat.Png);
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        public void TakeScreenshot(IWebDriver driver, String filename, int count, ExtentTest test)
        {
            try
            {
                OpenQA.Selenium.Screenshot screenshot = ((ITakesScreenshot)driver).GetScreenshot();
                screenshot.SaveAsFile(path + filename + count.ToString() + ".png", ScreenshotImageFormat.Png);
                test.Log(Status.Pass, "screenshot of page taken: " + driver.Url);
            }
            catch (Exception ex)
            {
                test.Log(Status.Fail, "failed to take screenshot of page: " + driver.Url + "(" + ex.ToString() + ")");
                throw;
            }
        }
        public void TakeScreenshot(IWebDriver driver, String filename, ExtentTest test)
        {
            try
            {
                OpenQA.Selenium.Screenshot screenshot = ((ITakesScreenshot)driver).GetScreenshot();
                screenshot.SaveAsFile(@path + filename + ".png", ScreenshotImageFormat.Png);
                test.Log(Status.Pass, "screenshot of page taken: " + driver.Url);
            }
            catch (Exception ex)
            {
                test.Log(Status.Fail, "failed to take screenshot of page: " + driver.Url + "(" + ex.ToString() + ")");
                throw;
            }
        }

        public void TakeScreenshotElement(IWebElement element, String filename)
        {
            if (element == null || !element.Displayed || !element.IsVisible())
            {
                throw new Exception();
            }
            try
            {
                OpenQA.Selenium.Screenshot screenshot = ((ITakesScreenshot)element).GetScreenshot();
                screenshot.SaveAsFile(path + filename + ".png", ScreenshotImageFormat.Png);
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        public void TakeScreenshotElement(IWebElement element, String filename, int count)
        {
            if (element == null || !element.Displayed || !element.IsVisible())
            {
                throw new Exception();
            }
            try
            {
                OpenQA.Selenium.Screenshot screenshot = ((ITakesScreenshot)element).GetScreenshot();
                screenshot.SaveAsFile(path + filename + count.ToString() + ".png", ScreenshotImageFormat.Png);
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        public void TakeScreenshotElement(IWebElement element, String filename, ExtentTest test)
        {
            if (element == null || !element.Displayed || !element.IsVisible())
            {
                test.Log(Status.Warning, "element null or not displayed");
            }
            try
            {
                OpenQA.Selenium.Screenshot screenshot = ((ITakesScreenshot)element).GetScreenshot();
                screenshot.SaveAsFile(path + filename + ".png", ScreenshotImageFormat.Png);
                test.Log(Status.Pass, "screenshot of element taken: " + element.TagName.ToString());
            }
            catch (Exception ex)
            {
                test.Log(Status.Fail, "failed to take screenshot of element: " + element.TagName.ToString() + "(" + ex.ToString() + ")");
                throw;
            }
        }
        public void TakeScreenshotElement(IWebElement element, String filename, int count, ExtentTest test)
        {
            if (element == null || !element.Displayed || !element.IsVisible())
            {
                test.Log(Status.Warning, "element null or not displayed");
            }
            try
            {
                OpenQA.Selenium.Screenshot screenshot = ((ITakesScreenshot)element).GetScreenshot();
                screenshot.SaveAsFile(path + filename + count.ToString() + ".png", ScreenshotImageFormat.Png);
                test.Log(Status.Pass, "screenshot of element taken: " + element.TagName.ToString());
            }
            catch (Exception ex)
            {
                test.Log(Status.Fail, "failed to take screenshot of element: " + element.TagName.ToString() + "(" + ex.ToString() + ")");
                throw;
            }
        }

    }
}
