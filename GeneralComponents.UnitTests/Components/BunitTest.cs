// Copyright (c) MudBlazor 2021
// MudBlazor licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using System;
using Xunit;

namespace MudBlazor.UnitTests.Components
{
    public abstract class BunitTest
    {
        public BunitTest()
        {
            Setup();
        }

        protected Bunit.TestContext Context { get; private set; } = null!;
        public virtual void Setup()
        {
            Context = new();
        }

        public void TearDown()
        {
            try
            {
                Context.Dispose();
            }
            catch (Exception)
            {
                /*ignore*/
            }
        }
    }
}
