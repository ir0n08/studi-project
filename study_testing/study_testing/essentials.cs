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
using System.Collections.Generic;

namespace automated_testing_essential
{
    internal class Essential
    {
        protected const string Alphabet = "abcdefghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        public string GetAlphabet()
        {
            return Alphabet;
        }
        public static void wait(int sec)
        {
            System.Threading.Thread.Sleep(sec * 1000);
        }

        public static void navURL(string url, ChromeDriver driver)
        {
            driver.Navigate().GoToUrl(url);
        }
        public static string generateRandomNumbers(string length)
        {
            string r = string.Empty;
            Random random = new Random();
            for (int i = 1; i < Int32.Parse(length) + 1; i++)
            {
                r += random.Next(0, 9).ToString();
            }
            return r;
        }
        public static string generateRandomString(int size)
        {
            char[] chars = new char[size];
            Random random = new Random();
            for (int i = 0; i < size; i++)
            {
                chars[i] = Alphabet[random.Next(Alphabet.Length)];
            }
            return new string(chars);
        }
        public static string generateRandomString(string size)
        {
            int size_ = int.Parse(size);
            char[] chars = new char[size_];
            Random random = new Random();
            for (int i = 0; i < size_; i++)
            {
                chars[i] = Alphabet[random.Next(Alphabet.Length)];
            }
            return new string(chars);
        }
        public static string generateRandomEmail()
        {
            return generateRandomString(10) + "@test.com";
        }
        public static Boolean IsAttributePresent(IWebElement element, string attribute)
        {
            if (element == null || attribute == null || element.IsReadonly()) return false;
            try
            {
                element.GetAttribute(attribute);
            }
            catch
            {
                return false;
            }
            try
            {
                if (element.GetAttribute(attribute).Equals(null) ||
                    element.GetAttribute(attribute).Equals("") ||
                    element.GetAttribute(attribute).Equals("-1"))
                {
                    return false;
                }
                else
                {
                    return true;
                }
            }
            catch
            {
                return false;
            }
        }
        public static int RandomInt(int max)
        {
            Random rnd = new Random();
            int ret = rnd.Next(0, max);
            return ret;
        }
        public static int RandomIntRange(int min, int max)
        {
            Random rnd = new Random();
            int ret = rnd.Next(min, max);
            return ret;
        }
        public static void ImplicitWait(int sec, ChromeDriver driver)
        {
            driver.Manage().Timeouts().ImplicitWait = System.TimeSpan.FromSeconds(sec);
        }
        public static Boolean checkforPrefix(string prefix, string checkword)
        {
            char[] pref = prefix.ToCharArray();
            char[] checkw = checkword.ToCharArray();
            if (pref.Length > checkw.Length)
            {
                return false;
            }
            if (pref.Length > 0)
            {
                for (int i = 0; i < prefix.Length; i++)
                {
                    if (pref[i] != checkw[i]) return false;
                }
                return true;
            }
            else
            {
                Console.WriteLine("no Prefix given");
                return false;
            }
        }
        public static string generateRandomURL()
        {
            return "https://www." + generateRandomString(15) + ".de";
        }
        public static int generateMaxInt(string length)
        {
            int l = int.Parse(length);
            char[] ret = new char[l];
            for (int i = 0; i < l; i++)
            {
                ret[i] = '9';
            }
            return int.Parse(ret);
        }
        public static string createRandomDate()
        {
            //local variables for day month and year
            int dd;
            int mm;
            int yyyy;
            string ret;
            dd = RandomIntRange(1, 28);
            mm = RandomIntRange(1, 12);
            yyyy = RandomIntRange(2000, 2020);
            if (dd < 10 && mm < 10)
            {
                //both singular case
                ret = "0" + dd.ToString() + "0" + mm.ToString() + yyyy.ToString();
            }
            else if (dd < 10 && mm > 9)
            {
                //dd singular case
                ret = "0" + dd.ToString() + mm.ToString() + yyyy.ToString();
            }
            else if (dd > 9 && mm < 10)
            {
                //mm singular case
                ret = dd.ToString() + "0" + mm.ToString() + yyyy.ToString();
            }
            else
            {
                //all double digits case
                ret = dd.ToString() + mm.ToString() + yyyy.ToString();
            }
            return ret;
        }
    }
}
